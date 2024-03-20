package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
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
	outputFolder := "languages"

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

		// Create a new Markdown file for the language
		language := strings.TrimSuffix(fileInfo.Name(), filepath.Ext(fileInfo.Name()))
		outputFile := filepath.Join(outputFolder, language+".md")
		file, err := os.Create(outputFile)
		if err != nil {
			log.Printf("Error creating file %s: %v", outputFile, err)
			continue
		}
		defer file.Close()

		file.WriteString(fmt.Sprintf("---\ntitle: %s\ndescription: %s snippets on the rocks.\n---\n\n", strings.Title(language), strings.Title(language)))

		// Write the markdown content for each snippet
		for name, snippet := range snippets {
			// Extract the first prefix that starts with "cotr"
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

            var linkedPrefix string = "[" + cotrPrefix + "]" + "(/snippets/" + strings.ToLower(cotrPrefix) + ")"

			// Write the "cotr" prefix as a subheader
			_, err := file.WriteString(fmt.Sprintf("## %s\n\n", linkedPrefix))
			if err != nil {
				log.Printf("Error writing to file: %v", err)
				continue
			}

			// Write the snippet name as a subheader
			_, err = file.WriteString(fmt.Sprintf("%s\n\n", name))
			if err != nil {
				log.Printf("Error writing to file: %v", err)
				continue
			}

			// Write the snippet body in a code block
			_, err = file.WriteString(fmt.Sprintf("```%s\n", language))
			if err != nil {
				log.Printf("Error writing to file: %v", err)
				continue
			}

			// Replace tabs with spaces in the snippet body
			body := strings.ReplaceAll(strings.Join(snippet.Body, "\n"), "\t", "    ")
			_, err = file.WriteString(body + "\n")
			if err != nil {
				log.Printf("Error writing to file: %v", err)
				continue
			}

			_, err = file.WriteString("```\n\n")
			if err != nil {
				log.Printf("Error writing to file: %v", err)
				continue
			}
		}

		fmt.Printf("Conversion complete for language: %s\n", language)
	}

	fmt.Println("All conversions complete. Markdown files generated in the 'languages' folder.")
}
