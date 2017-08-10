var core = require('./src/core');
var helpers = require('./src/helpers');

module.exports = {
  inline: async function(htmlFile, assetPath = '') {
    const htmlContents = await helpers.readFile(htmlFile);

    return core.replaceTags(htmlContents, assetPath);
  }
}
