var through = require('through');
var _ = require('lodash');

module.exports = function(file) {
  if (!/\.tpl|\.html/.test(file)) {
    return through();
  }
  var buffer = '';

  return through(function(chunk) {
    return buffer += chunk.toString();
  }, function() {
    var compiled = ['_ = require("lodash");'];
    var jst = _.template(buffer.toString()).source;
    compiled.push('module.exports = '+jst);
    this.queue(compiled.join('\n'));
    return this.queue(null);
  });
};
