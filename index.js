'use strict'

const convert = require('jscss/lib/convert')
const pretty = require('jscss/lib/compile').pretty
const compact = require('jscss/lib/compile').compact

exports.name = 'jscss'
exports.inputFormats = ['jscss', 'css', 'js']
exports.outputFormat = 'css'

exports.render = function (str, opts) {
  return jscss(str, opts)
}

// Just workaround, PRs sent
function jscss(jscss, opts) {
  opts = typeof opts === 'object' ? opts : {}
  const converted = convert(jscss)

  if (opts.pretty || opts.prettify) {
    return pretty(converted)
  }

  if (opts.intermediate) {
    return converted
  }

  return compact(converted)
}
