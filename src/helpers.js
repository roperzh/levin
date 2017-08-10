var fs = require('fs');

module.exports = {
  readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', function(err, content) {
        if (err) {
          reject(err);
        }

        resolve(content);
      });
    });
  }
}
