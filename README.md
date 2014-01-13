# Browerify-lodash-template-loader

> Lodash template precompiler plugin for Browserify v2.

Inspired and based on [node-underscorify](https://github.com/maxparm/node-underscorify)

## Setup

Install node-underscorify in your project via npm:

`npm install node-underscorify`

Then use the node-underscorify within the browserify command line transform option:

`browserify -t node-underscorify main.js > bundle.js`


## Usage

##### template.html
```
<div><%= message %></div>
```

##### main.js
```
var template = require("./template.html");
document.body.innerHTML = template({message: "Hello Node Underscorify!"});
```

It will render: `<div>Hello Node Underscorify!</div>`
