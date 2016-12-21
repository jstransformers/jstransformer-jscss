# jstransformer-jscss

[JSCSS](https://github.com/AlexanderSelzer/jscss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jscss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jscss)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-jscss/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-jscss)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jscss/master.svg)](http://david-dm.org/jstransformers/jstransformer-jscss)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jscss.svg)](https://www.npmjs.org/package/jstransformer-jscss)

## Installation

    npm install jstransformer-jscss

## API

```js
var jscss = require('jstransformer')(require('jstransformer-jscss'));

var input = 'var color = "#d02783"; div { background: |color|; }';
jscss.render(input).body
//=> 'div { background: #d02783; }'
```

## License

MIT
