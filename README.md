# jstransformer-jscss

[JSCSS](https://github.com/AlexanderSelzer/jscss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-jscss

## API

```js
var jscss = require('jstransformer')(require('jstransformer-jscss'))

var input = 'var color = "#d02783"; div { background: |color|; }'
jscss.render(input).body
//=> 'div { background: #d02783; }'
```

## License

MIT
