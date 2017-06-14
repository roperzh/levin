var helpers = require('./src/helpers');
var core = require('./src/core');
var levin = {};

module.exports = levin;

levin.inline = function(htmlFile, assetPath, htmlPath, callback) {
  var htmlPath = htmlPath || '';
  var assetPath = assetPath || '';

  helpers.readFile(htmlPath + htmlFile, function(htmlContents) {
    var tags = core.findTags(htmlContents);

    core.replaceTags(htmlContents, tags, assetPath, function(result) {
      callback(result);
    });
  });
}
