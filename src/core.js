const helpers = require('./helpers');
const ASSET_REGEXP =
  /<script.*?src=".*?".*?\/script>|<link.*?rel="stylesheet".*?href=".*?".*?>/img

module.exports = {
  replaceTags: async function(html, assetPath) {
    let inlinedHtml = html;

    for(let tag of findTags(html)) {
      const tagSrc = `${assetPath}/${getTagSrc(tag)}`;
      const fileContents = await helpers.readFile(tagSrc);
      const replacement = generateTag(tag, fileContents);

      inlinedHtml = inlinedHtml.replace(tag, replacement);
    }

    return inlinedHtml;
  }
}

function findTags(html) {
  return html.match(ASSET_REGEXP);
}

function generateTag(tag, contents) {
  const wrapper = tag.indexOf('script') !== -1 ? 'script' : 'style';

  return `<${wrapper}>${contents.trim()}</${wrapper}>`;
}

function getTagSrc(tag) {
  const tagSrc = tag.match(/(src|ref)="(.*?)"/);

  if (tagSrc) {
    return tagSrc[2];
  } else {
    return Error('Levin couldn\'t find a source for the tag: ' + tag);
  }
}
