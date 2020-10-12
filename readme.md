# Project Pumpkin

[Live site on GitHub pages](https://dkessner.github.io/ProjectPumpkin/)

<br/>

For each code example (e.g. the Pumpkin face):

- __Code__: (`face.js`) p5.js code
- __Markdown__: (`face.md`) converted to HTML with Jekyll
- __Link__: (`index.md`) link to the example on the home page


Implementation note:

The examples use a p5.js command to specify where the sketch is embedded in the
HTML file (in `<div id="sketch">`):
```
canvas.parent("sketch");
```

This won't work in the embedded p5.js editor, so the line should be removed in
the Markdown.

