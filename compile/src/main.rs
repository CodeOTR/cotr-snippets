use serde_json::{Map, Value};
use std::fs::{self, File};
use std::io::{self, Write};
use std::path::PathBuf;

fn read_snippet_file(file_path: &str) -> io::Result<Value> {
    let file_content = fs::read_to_string(file_path)?;
    let json: Value = serde_json::from_str(&file_content)?;
    Ok(json)
}

fn combine_snippets(snippets: Vec<Value>) -> Value {
    let mut combined = Map::new();
    for snippet in snippets {
        if let Value::Object(map) = snippet {
            for (key, value) in map {
                combined.insert(key, value);
            }
        }
    }
    Value::Object(combined)
}

fn write_to_file(output_path: &str, combined_snippets: &Value) -> io::Result<()> {
    let mut file = File::create(output_path)?;
    let json_string = serde_json::to_string_pretty(combined_snippets)?;
    file.write_all(json_string.as_bytes())?;
    Ok(())
}

fn main() -> io::Result<()> {

    // Print the current directory
    let current_dir = std::env::current_dir()?;
    println!("Current directory: {}", current_dir.display());
    // Get all snippet files from current directory
    let snippet_files: Vec<PathBuf> = fs::read_dir("./../languages/cpp")?
        .filter_map(|entry| entry.ok())
        .filter(|entry| entry.file_type().map(|ft| ft.is_file()).unwrap_or(false))
        .filter(|entry| {
            entry
                .path()
                .extension()
                .map(|ext| ext == "json")
                .unwrap_or(false)
        })
        .map(|entry| entry.path())
        .collect::<Vec<_>>();

    let mut snippets = Vec::new();

    for file_path in snippet_files {
        let snippet = read_snippet_file(file_path.to_str().unwrap())?;
        snippets.push(snippet);
    }

    let combined_snippets = combine_snippets(snippets);
    write_to_file("combined_snippets.json", &combined_snippets)?;

    Ok(())
}


fn main_loop() -> io::Result<()> {
    // Print the current directory
    let current_dir = std::env::current_dir()?;
    println!("Current directory: {}", current_dir.display());

    // List of languages
    let languages = vec!["cpp", "java", "python", "rust", "javascript"];

    for language in languages {
        // Get all snippet files from current language directory
        let snippet_files: Vec<PathBuf> = fs::read_dir(format!("./../languages/{}", language))?
            .filter_map(|entry| entry.ok())
            .filter(|entry| entry.file_type().map(|ft| ft.is_file()).unwrap_or(false))
            .filter(|entry| {
                entry
                    .path()
                    .extension()
                    .map(|ext| ext == "json")
                    .unwrap_or(false)
            })
            .map(|entry| entry.path())
            .collect::<Vec<_>>();

        let mut snippets = Vec::new();

        for file_path in snippet_files {
            let snippet = read_snippet_file(file_path.to_str().unwrap())?;
            snippets.push(snippet);
        }

        let combined_snippets = combine_snippets(snippets);
        write_to_file(&format!("{}_combined_snippets.json", language), &combined_snippets)?;
    }

    Ok(())
}