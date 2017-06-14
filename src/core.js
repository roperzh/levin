var helpers = require('./helpers');
var core = {};
var SCRIPT_RXP =
  /<script.*?src=".*?".*?\/script>|<link.*?rel="stylesheet".*?href=".*?".*?>/img

module.exports = core;

core.findTags = function(html) {
  return html.match(SCRIPT_RXP);
}

core.replaceTags = function(html, tags, assetPath, callback) {
  var inlinedHtml = html;

  helpers.asyncForEach(tags, function(tag, iteratorCallback) {
    var tagSrc = assetPath + '/' + getTagSrc(tag);

    helpers.readFile(tagSrc, function(fileContents) {
      var replacement = generateTag(tag, fileContents);

      inlinedHtml = inlinedHtml.replace(tag, replacement);
      iteratorCallback();
    });

  }, function() {
    callback(inlinedHtml);
  });
}

function generateTag(tag, contents) {
  var wrapper = tag.indexOf('script') !== -1 ? 'script' : 'style';

  return (
    '<' + wrapper + '>' +
      contents.trim() +
    '</' + wrapper + '>'
  );
}

function getTagSrc(tag) {
  var tagSrc = tag.match(/(src|ref)="(.*?)"/);

  if (tagSrc) {
    return tagSrc[2];
  } else {
    return Error('Levin couldn\'t find a source for the tag: ' + tag);
  }

  return src;
}
