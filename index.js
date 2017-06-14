var helpers = require('./src/helpers');
var core = require('./src/core');
var levin = {};

module.exports = levin;

levin.inline = function(htmlFile, assetPath, callback) {
  var assetPath = assetPath || '';

  helpers.readFile(htmlFile, function(htmlContents) {
    var tags = core.findTags(htmlContents);

    core.replaceTags(htmlContents, tags, assetPath, function(result) {
      callback(result);
    });
  });
}
