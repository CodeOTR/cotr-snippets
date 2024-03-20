## Markdown Comment (HTML)

### [cotrComment](/snippets/cotrComment)

```markdown
<!-- ${1:Your comment here} -->
```

## Markdown Code Block

### [cotrCodeBlock](/snippets/cotrCodeBlock)

```markdown
```
${1:Your code here}
```
```

## Markdown Ordered List

### [cotrOrderedList](/snippets/cotrOrderedList)

```markdown
${1:1}. ${2:List item}
```

## Markdown Link

### [cotrLink](/snippets/cotrLink)

```markdown
[${1:link text}](${2:https://www.example.com})
```

## Markdown Info

### [cotrInfo](/snippets/cotrInfo)

```markdown
# Markdown Syntax Reference:

Markdown is a lightweight markup language for creating formatted text.
It uses simple syntax to format text, create lists, insert links, and more.

See the official Markdown guide for more details: https://www.markdownguide.org/
```

## Markdown Multi-Line Comment (HTML)

### [cotrCommentMulti](/snippets/cotrCommentMulti)

```markdown
<!--
  ${1:Your comment here}
-->
```

## Markdown Heading

### [cotrHeading](/snippets/cotrHeading)

```markdown
${1:#} ${2:Heading Text}
```

## Markdown Bold

### [cotrBold](/snippets/cotrBold)

```markdown
**${1:bold text}**
```

## Markdown Italic

### [cotrItalic](/snippets/cotrItalic)

```markdown
*${1:italic text}*
```

## Markdown Unordered List

### [cotrList](/snippets/cotrList)

```markdown
- ${1:List item}
```

## Markdown Image

### [cotrImage](/snippets/cotrImage)

```markdown
![${1:alt text}](${2:image.jpg})

// Note: Markdown does not have built-in options for adjusting image size or alignment.
// You can use HTML attributes within the image tag for more control:
// Example: <img src="image.jpg" alt="alt text" width="50%" align="right" />
```

## Markdown Badges

### [cotrBadges](/snippets/cotrBadges)

```markdown
<!-- For example: 
![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=Ruby&logoColor=white)

Icons can be found at: https://simpleicons.org/ -->
 -->
[![${1:Badge Name}](${2:https://img.shields.io/badge/Label-Message-Color})](${3:https://www.example.com})
```

