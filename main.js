var fs = require('fs');
var cssscss = require('css-scss');

// Console will print the message
var src = fs.readFileSync('./input.css', 'utf8');
var scss = cssscss(src);
fs.writeFileSync('./output.scss', scss);
