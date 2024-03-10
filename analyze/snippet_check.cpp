#include <fstream>
#include <iostream>
#include <set>
#include <string>

// This program checks if all the snippet prefixes are present in the snippet file
// Run it with `g++ -std=c++11 snippet_check.cpp -o snippet_check && ./snippet_check`
int main()
{
    std::ifstream file("./../snippets/cpp.json");

    // Define the set of snippet prefixes
    std::set<std::string> prefixes = {
        "cotrInfo",
        "cotrStructure",
        "cotrStructureFeatures",
        "cotrStructureFiles",
        "cotrOperators",
        "cotrOperatorsBool",
        "cotrEqual",
        "cotrNotEqual",
        "cotrEntry",
        "cotrTypeCheck",
        "cotrTypeCompare",
        "cotrTypeConvert",
        "cotrTypes",
        "cotrTypesString",
        "cotrTypesInt",
        "cotrTypesNum",
        "cotrTypesBool",
        "cotrTypesBoolTrue",
        "cotrTypesBoolFalse",
        "cotrTypesDate",
        "cotrTypesList",
        "cotrTypesMap",
        "cotrTypesDynamic",
        "cotrTypesNull",
        "cotrNow",
        "cotrVar",
        "cotrVarSyntax",
        "cotrVarTyped",
        "cotrVarNullable",
        "cotrVarString",
        "cotrVarStringMulti",
        "cotrVarNum",
        "cotrVarBool",
        "cotrVarDate",
        "cotrVarList",
        "cotrVarMap",
        "cotrConst",
        "cotrStaticVar",
        "cotrGenMap",
        "cotrGenList",
        "cotrPrint",
        "cotrPrintMulti",
        "cotrInterpolate",
        "cotrConcat",
        "cotrForLoop",
        "cotrForIn",
        "cotrWhileLoop",
        "cotrSwitch",
        "cotrFunc",
        "cotrFuncArgs",
        "cotrFuncArgsNamed",
        "cotrFuncArrow",
        "cotrFuncAnon",
        "cotrFuncLambda",
        "cotrFuncSyntax",
        "cotrComment",
        "cotrCommentMulti",
        "cotrThrow",
        "cotrTryCatch",
        "cotrIf",
        "cotrIfElse",
        "cotrTernary"};

    if (file.is_open())
    {
        std::string line;
        while (std::getline(file, line))
        {
            // Check if the line contains any of the prefixes
            for (const auto &prefix : prefixes)
            {
                if (line.find(prefix) != std::string::npos)
                {
                    // If it does, remove the prefix from the set
                    prefixes.erase(prefix);
                    break;
                }
            }
        }
    }
    else
    {
        std::cout << "File not found" << std::endl;
    }

    // Output the missing prefixes
    if (!prefixes.empty())
    {
        std::cout << "Missing prefixes:" << std::endl;
        for (const auto &prefix : prefixes)
        {
            std::cout << prefix << std::endl;
        }
    }
    else
    {
        std::cout << "All prefixes found" << std::endl;
    }

    return 0;
}