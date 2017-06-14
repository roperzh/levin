var assert = require('assert');
var helpers = require('../src/helpers');
var levin = require('../');

describe('helpers', function() {
  describe('#readFile()', function() {
    it('finds the HTML file', function(done) {
      helpers.readFile('test/fixtures/minimal.html', function(content) {
        assert.equal(content, '<html></html>\n');
        done();
      });
    });
  });
});

describe('levin', function() {
  describe('#inline()', function() {
    it('inlines CSS and JS into HTML', function(done) {
      levin.inline('test/fixtures/base.html', 'test/fixtures', function(result) {
        helpers.readFile('test/fixtures/base-inlined.html', function(inlinedFile) {
          assert.equal(result, inlinedFile);
          done();
        });
      });
    });
  });
});
