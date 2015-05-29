'use strict';

var convert = require('jscss/lib/convert');
var pretty = require('jscss/lib/compile').pretty;
var compact = require('jscss/lib/compile').compact;

exports.name = 'jscss';
exports.inputFormats = ['jscss', 'css', 'js'];
exports.outputFormat = 'css';

exports.render = function _render(jscss, options) {
  options = options || {};
  var converted = convert(jscss);

  if (options.pretty || options.prettify) {
    return pretty(converted);
  }

  if (options.intermediate) {
    return converted;
  }

  return compact(converted);
};
