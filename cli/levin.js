#!/usr/bin/env node

var levin = require('..');
var args = process.argv;
var htmlPath = args[2];
var assetPath = args[3];
var help = "\nUsage: levin path/to/file.html [asset/path]\n";

if (htmlPath === undefined) {
  console.log('\nPlease provide a path to your HTML file\n', help);
  return;
} else if(htmlPath === 'help') {
  console.log(help);
  return;
}

levin.inline(htmlPath, assetPath, function(result) {
  console.log(result);
});
