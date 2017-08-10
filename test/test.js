var assert = require('assert');
var helpers = require('../src/helpers');
var levin = require('../');

describe('helpers', function() {
  describe('#readFile()', function() {
    it('finds the HTML file', function(done) {
      helpers.readFile('test/fixtures/minimal.html')
        .then(function(content) {
          assert.equal(content, '<html></html>\n');
          done();
      });
    });
  });
});

describe('levin', function() {
  describe('#inline()', function() {
    it('inlines CSS and JS into HTML', async function() {
      try {
        var result = await levin.inline('test/fixtures/base.html', 'test/fixtures');
        var inlinedFile = await helpers.readFile('test/fixtures/base-inlined.html')
        assert.equal(result, inlinedFile);
      } catch(e) {
        throw Error(e);
      }
    });
  });
});
