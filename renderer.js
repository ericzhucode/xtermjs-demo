// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering

const { Terminal } = require("xterm");

// process.
var term = new Terminal()
term.open(document.getElementById("terminal"));
term.write("Hello, world!")