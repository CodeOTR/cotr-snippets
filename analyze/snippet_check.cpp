#include <fstream>
#include <iostream>
#include <set>
#include <string>

int main() {
    std::ifstream file("./../snippets/cpp.json");

    // Define the set of snippet prefixes
    std::set<std::string> prefixes = {"prefix1", "prefix2", "prefix3"};

    if (file.is_open()) {
        std::string line;
        while (std::getline(file, line)) {
            // Check if the line starts with any of the prefixes
            for (const auto& prefix : prefixes) {
                if (line.rfind(prefix, 0) == 0) {
                    // If it does, remove the prefix from the set
                    prefixes.erase(prefix);
                    break;
                }
            }
        }
    } else {
        std::cout << "File not found" << std::endl;
    }

    // Output the missing prefixes
    if (!prefixes.empty()) {
        std::cout << "Missing prefixes:" << std::endl;
        for (const auto& prefix : prefixes) {
            std::cout << prefix << std::endl;
        }
    } else {
        std::cout << "All prefixes found" << std::endl;
    }

    return 0;
}