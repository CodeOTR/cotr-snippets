# Build Docs

## Languages

Cd into the `docs` directory and run the following command to build the docs:

```bash
go run main.go
```

## Snippets

Cd into the `docs` directory and run the following command to build the snippets:

```bash
go run snippets.go
```

# Check For Missing Snippets

Cd into the `analyze` directory and run the following command to check for missing snippets:

```bash
g++ -std=c++11 snippet_check.cpp -o snippet_check && ./snippet_check
```