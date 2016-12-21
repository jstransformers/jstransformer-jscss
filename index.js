'use strict'

var convert = require('jscss/lib/convert')
var pretty = require('jscss/lib/compile').pretty
var compact = require('jscss/lib/compile').compact

exports.name = 'jscss'
exports.inputFormats = ['jscss', 'css', 'js']
exports.outputFormat = 'css'

exports.render = function (str, opts) {
  return jscss(str, opts)
}

// just workaround, PRs sent
function jscss(jscss, opts) {
  opts = typeof opts === 'object' ? opts : {}
  var converted = convert(jscss)

  if (opts.pretty || opts.prettify) {
    return pretty(converted)
  }

  if (opts.intermediate) {
    return converted
  }

  return compact(converted)
}
