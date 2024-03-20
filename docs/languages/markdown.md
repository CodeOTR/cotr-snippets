---
title: Markdown
description: Markdown snippets on the rocks.
---

## [cotrInfo](/snippets/cotrinfo)

Markdown Info

```markdown
# Markdown Syntax Reference:

Markdown is a lightweight markup language for creating formatted text.
It uses simple syntax to format text, create lists, insert links, and more.

See the official Markdown guide for more details: https://www.markdownguide.org/
```

## [cotrComment](/snippets/cotrcomment)

Markdown Comment (HTML)

```markdown
<!-- ${1:Your comment here} -->
```

## [cotrOrderedList](/snippets/cotrorderedlist)

Markdown Ordered List

```markdown
${1:1}. ${2:List item}
```

## [cotrItalic](/snippets/cotritalic)

Markdown Italic

```markdown
*${1:italic text}*
```

## [cotrList](/snippets/cotrlist)

Markdown Unordered List

```markdown
- ${1:List item}
```

## [cotrLink](/snippets/cotrlink)

Markdown Link

```markdown
[${1:link text}](${2:https://www.example.com})
```

## [cotrImage](/snippets/cotrimage)

Markdown Image

```markdown
![${1:alt text}](${2:image.jpg})

// Note: Markdown does not have built-in options for adjusting image size or alignment.
// You can use HTML attributes within the image tag for more control:
// Example: <img src="image.jpg" alt="alt text" width="50%" align="right" />
```

## [cotrCodeBlock](/snippets/cotrcodeblock)

Markdown Code Block

```markdown
```
${1:Your code here}
```
```

## [cotrCommentMulti](/snippets/cotrcommentmulti)

Markdown Multi-Line Comment (HTML)

```markdown
<!--
  ${1:Your comment here}
-->
```

## [cotrHeading](/snippets/cotrheading)

Markdown Heading

```markdown
${1:#} ${2:Heading Text}
```

## [cotrBold](/snippets/cotrbold)

Markdown Bold

```markdown
**${1:bold text}**
```

## [cotrBadges](/snippets/cotrbadges)

Markdown Badges

```markdown
<!-- For example: 
![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=Ruby&logoColor=white)

Icons can be found at: https://simpleicons.org/ -->
 -->
[![${1:Badge Name}](${2:https://img.shields.io/badge/Label-Message-Color})](${3:https://www.example.com})
```

