var fs = require('fs');
var helpers = {};

module.exports = helpers;

helpers.asyncForEach = function (arr, iterator, callback) {
  var queue = arr.slice(0);

  function next(err) {
    if (err) return callback(err);
    if (queue.length === 0) return callback(null);

    iterator(queue.shift(), next);
  }

  next();
}

helpers.readFile = function(filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      throw err;
    }

    return callback(content);
  });
}
