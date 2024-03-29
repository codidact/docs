| URL slug | Category |
|:--------:|:--------:|
| formatting | Writing Posts |

## How to format posts

Codidact uses the [CommonMark implementation](https://commonmark.org) of Markdown for formatting posts.

### **Italics**

  You can *italicize* a word by placing a single asterisk (`*`) or single underscore (`_`) around a word. Either `*Codidact*` or `_Codidact_` will render as *Codidact*.

### **Bold**

  You can **bold** a word by placing a double asterisk or double underscore around that word. Either `**Codidact**` or `__Codidact__` will render as **Codidact**.

### **Monospace / code formatting**

  To make a word monospace, you can surround it with a single backtick (<code>&#96;</code>). This is generally used for code formatting. (Some people use this for emphasis. Don't do that! Screen readers will read out words formatted as code character by character - use *italics* or **bold** for emphasis instead.)

  To mark several lines as code, you can use a code fence. This is three backticks on a newline both on top and at the bottom of your lines of code. Don't use this for quotes - see below for guidance on quote formatting.

### **Paragraphs**

  To create an entirely new paragraph to separate two blocks of text, use two newlines (usually typed by pressing the "enter" key) after the end of your first paragraph. This will result in two entirely separate paragraphs, like this:

  > Paragraph one.
  >
  > Paragraph two.

  To start on a new line directly under your previous line, use two spaces (`  `) after the end of your first line and then a newline. This will result in this:

  > Paragraph one.  
  > Paragraph two.

### **Links**

  You can generate a link using one of two methods. One way is to encase your link text in square brackets (`[ ]`) and then the target URL in parentheses (`( )`). `[Codidact](https://codidact.org)` will render as [Codidact](https://codidact.org).

  You can also format a link with the inline text being `[Codidact][1]`, and then at the bottom of the post include the URL with the format `[1]: https://codidact.org`. This will look something like this:

```

  You can check out [Codidact][1] for an open-source, community-oriented Q&A platform!

  [1]: https://codidact.org`

```
  Which will render like this:

  > You can check out [Codidact][1] for an open-source, community-oriented Q&A platform!
  >
  > [1]: https://codidact.org

  If you'd like to include rollover text for your link, you can put your text, surrounded by quote marks (`"`), into the URL of your link. For instance, `[Codidact](https://codidact.org "The open-source Q&A platform")` will create a link with `The open-source Q&A platform` as the rollover text.

### **Blockquotes**

  When quoting text from somewhere else, you can use a blockquote to signify that this is not your original text, but a quote from somewhere else. Put a greater than symbol (`>`), followed by a space, before a paragraph to mark that quote as a blockquote. For instance, `> This is a blockquote!` will render as a quote:

  > This is a blockquote!

  If you want to include a second paragraph as part of the same quote, you have to include another `>` before each line, like this:

```
  > This is a blockquote!
  >
  > This is part of the same quote!
```

  This will render as a single blockquote:

  > This is a blockquote!
  >
  > This is part of the same quote!

  See also the [citation and referencing help](/help/referencing) for guidelines on how to properly reference different quotes from various places.

### **Images**

  Embedding images in a post is very similar to the formatting for links (detailed above). The format `![alt text](image URL)` will embed an image in your post. Please remember to [write alt text for your image](/help/alt-text)! Codidact allows you to upload an image directly, or you can embed an external image from image hosting sites such as Imgur.

### **Lists**

  You can generate either an ordered list or a bullet list. For a bullet list, you can use either `*` or `-` to create your list.

```
* List item one
* List item two
```

  This will render like this:

>  * List item one
>  * List item two

  If you want to create a numbered list, use `1.`, `2.`, etc instead of `*` or `-`. Note that the exact number you use, in most cases, is irrelevant - after the first number that you use, no matter what number you put in, Codidact will automatically number it in order. For instance, if you create a list and type `1. List item #1` for the first line, then `3. List item #2` for the second line, Codidact will automatically render the `3.` as a `2.`. If you begin your list at any other number, such as your first list item is numbered `5.`, Codidact will continue from that number onwards (with the next number automatically rendering as `6.`).

### **Horizontal line**

  You can use a horizontal line for separating sections of your post. Use `---` on its own line to generate a horizontal line.

### **Headings**

  You can include a heading in your post. Using a single hash symbol (`#`) before a line of your post will create a large heading, while adding another will create a slightly smaller heading (up to six different heading sizes).

```
# Heading 1

## Heading 2

###### Heading 6
```

  > # Heading 1
  >
  > ## Heading 2
  >
  > ###### Heading 6


### **Footnotes**

  To include a footnote in your post, you can use the syntax `[^1]`. In your main text, include `Text[^1] and more text`, and at the bottom (where you want to include your footnote), place a line resembling `[^1]: footnote text`.
