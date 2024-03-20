package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
)

type Prefix struct {
	Value interface{}
}

func (p *Prefix) UnmarshalJSON(b []byte) error {
	if b[0] != '[' {
		var single string
		if err := json.Unmarshal(b, &single); err != nil {
			return err
		}
		p.Value = single
		return nil
	}
	var multiple []string
	if err := json.Unmarshal(b, &multiple); err != nil {
		return err
	}
	p.Value = multiple
	return nil
}

type Snippet struct {
	Prefix      Prefix   `json:"prefix"`
	Body        []string `json:"body"`
	Description string   `json:"description"`
}

func main() {
	snippetsFolder := "./../snippets"
	outputFolder := "snippets"

	// Create the output folder if it doesn't exist
	err := os.MkdirAll(outputFolder, os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}

	// Read all JSON files in the snippets folder
	files, err := os.ReadDir(snippetsFolder)
	if err != nil {
		log.Fatal(err)
	}

	// Create a map to store the snippets for each "cotr" prefix
	snippetsByPrefix := make(map[string]map[string]Snippet)

	// Loop through each JSON file
	for _, fileInfo := range files {
		if fileInfo.IsDir() || filepath.Ext(fileInfo.Name()) != ".json" {
			continue
		}

		// Read the JSON file
		jsonData, err := os.ReadFile(filepath.Join(snippetsFolder, fileInfo.Name()))
		if err != nil {
			log.Printf("Error reading file %s: %v", fileInfo.Name(), err)
			continue
		}

		// Parse the JSON data
		var snippets map[string]Snippet
		err = json.Unmarshal(jsonData, &snippets)
		if err != nil {
			log.Printf("Error parsing JSON file %s: %v", fileInfo.Name(), err)
			continue
		}

		// Extract the language from the file name
		language := strings.TrimSuffix(fileInfo.Name(), filepath.Ext(fileInfo.Name()))

		if language == "markdown" {
			continue
		}

		// Iterate over each snippet in the JSON file
		for _, snippet := range snippets {
			// Extract the "cotr" prefix from the snippet
			var cotrPrefix string
			switch v := snippet.Prefix.Value.(type) {
			case string:
				if strings.HasPrefix(v, "cotr") {
					cotrPrefix = v
				}
			case []string:
				for _, prefix := range v {
					if strings.HasPrefix(prefix, "cotr") {
						cotrPrefix = prefix
						break
					}
				}
			}

			if cotrPrefix == "" {
				continue
			}

			// Remove the variable syntax from the snippet body
			snippet.Body = removeVariableSyntax(snippet.Body)

			// Add the snippet to the map based on the "cotr" prefix
			if _, ok := snippetsByPrefix[cotrPrefix]; !ok {
				snippetsByPrefix[cotrPrefix] = make(map[string]Snippet)
			}
			snippetsByPrefix[cotrPrefix][language] = snippet
		}
	}

	// Create a Markdown file for each "cotr" prefix
	for prefix, snippets := range snippetsByPrefix {
		outputFile := filepath.Join(outputFolder, prefix+".md")
		file, err := os.Create(outputFile)
		if err != nil {
			log.Printf("Error creating file %s: %v", outputFile, err)
			continue
		}
		defer file.Close()

		// Write the header for the Markdown file
		file.WriteString(fmt.Sprintf("---\ntitle: %s\ndescription: The %s snippet.\n---\n\n", prefix, prefix))

		// Write the description
		if len(snippets) > 0 {
			for _, snippet := range snippets {
				file.WriteString(strings.Split(snippet.Description, " in ")[0] + "\n\n")
				break
			}
		}

		// Write the aliases
		aliases := make([]string, 0)
		for _, snippet := range snippets {
			switch v := snippet.Prefix.Value.(type) {
			case string:
				aliases = append(aliases, v)
			case []string:
				aliases = append(aliases, v...)
			}
		}
		// Remove duplicates
		aliases = removeDuplicates(aliases)

		file.WriteString("**Aliases**:\n")
		for _, alias := range aliases {
			file.WriteString(fmt.Sprintf("- %s\n", alias))
		}
		file.WriteString("\n")

		// Sort the languages alphabetically
		languages := make([]string, 0, len(snippets))
		for language := range snippets {
			languages = append(languages, language)
		}
		sort.Strings(languages)

		// Write the implementations for each language
		for _, language := range languages {
			snippet := snippets[language]
			file.WriteString(fmt.Sprintf("## %s\n", language))
			file.WriteString(fmt.Sprintf("```%s\n", language))
			body := strings.ReplaceAll(strings.Join(snippet.Body, "\n"), "\t", "    ")
			file.WriteString(body + "\n")
			file.WriteString("```\n\n")
		}
	}

	fmt.Println("Snippet files generated in the 'snippets' folder.")
}

func removeDuplicates(elements []string) []string {
	encountered := map[string]bool{}
	result := []string{}

	for v := range elements {
		if encountered[elements[v]] == true {
			// Do not add duplicate.
		} else {
			encountered[elements[v]] = true
			result = append(result, elements[v])
		}
	}

	return result
}

func removeVariableSyntax(lines []string) []string {
	variableRegex := regexp.MustCompile(`\$\{[\d:]+[^}]*\}`)
	dollarRegex := regexp.MustCompile(`(^|[^\\])\$`)

	result := make([]string, len(lines))
	for i, line := range lines {
		line = variableRegex.ReplaceAllStringFunc(line, func(match string) string {
			parts := strings.SplitN(match[2:len(match)-1], ":", 2)
			if len(parts) == 2 {
				return parts[1]
			}
			return ""
		})
		line = dollarRegex.ReplaceAllString(line, "")
		result[i] = line
	}
	return result
}
