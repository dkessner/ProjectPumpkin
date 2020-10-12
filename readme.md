# Project Pumpkin

[Live site on GitHub pages](https://dkessner.github.io/ProjectPumpkin/)

<br/>

## Adding an example

For each code example (e.g. the Pumpkin face):

- __Code__: (`face.js`) p5.js code
- __Markdown__: (`face.md`) converted to HTML with Jekyll
- __Link__: (`index.md`) link to the example on the home page


## Implementation note

The examples use a p5.js command to specify that the sketch should be embedded
in the HTML file in the `<div id="sketch">` element:
```
canvas.parent("sketch");
```

This won't work in the embedded p5.js editor, so the line should be removed in
the Markdown.

## Local testing

GitHub Pages uses the static site generator Jekyll to convert Markdown files
(.md) to HTML.  You can test your local changes to the site using a local
installation of Jekyll.

1. Install [Jekyll](https://jekyllrb.com/).

2. Start a local server.  

    On the command line, in your local ProcessingExamples directory:
    ```
    bundle exec jekyll serve
    ```

3. View the pages in your browser at:
[http://localhost:4000](http://localhost:4000)

[Detailed instructions on GitHub](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)


