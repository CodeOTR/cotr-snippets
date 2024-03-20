## Markdown Ordered List

### {cotrOrderedList}

```
${1:1}. ${2:List item}
```

## Markdown Link

### {cotrLink}

```
[${1:link text}](${2:https://www.example.com})
```

## Markdown Badges

### {cotrBadges}

```
<!-- For example: 
![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=Ruby&logoColor=white)

Icons can be found at: https://simpleicons.org/ -->
 -->
[![${1:Badge Name}](${2:https://img.shields.io/badge/Label-Message-Color})](${3:https://www.example.com})
```

## Markdown Info

### {[cotrInfo languageInfo info]}

```
# Markdown Syntax Reference:

Markdown is a lightweight markup language for creating formatted text.
It uses simple syntax to format text, create lists, insert links, and more.

See the official Markdown guide for more details: https://www.markdownguide.org/
```

## Markdown Italic

### {cotrItalic}

```
*${1:italic text}*
```

## Markdown Unordered List

### {cotrList}

```
- ${1:List item}
```

## Markdown Bold

### {cotrBold}

```
**${1:bold text}**
```

## Markdown Image

### {cotrImage}

```
![${1:alt text}](${2:image.jpg})

// Note: Markdown does not have built-in options for adjusting image size or alignment.
// You can use HTML attributes within the image tag for more control:
// Example: <img src="image.jpg" alt="alt text" width="50%" align="right" />
```

## Markdown Code Block

### {cotrCodeBlock}

```
```
${1:Your code here}
```
```

## Markdown Comment (HTML)

### {[cotrComment comment note]}

```
<!-- ${1:Your comment here} -->
```

## Markdown Multi-Line Comment (HTML)

### {[cotrCommentMulti multiLineComment commentMultiLine blockComment]}

```
<!--
  ${1:Your comment here}
-->
```

## Markdown Heading

### {cotrHeading}

```
${1:#} ${2:Heading Text}
```

