# jstransformer-jscss

[JSCSS](https://github.com/AlexanderSelzer/jscss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jscss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jscss)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jscss/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jscss?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jscss.svg)](https://www.npmjs.org/package/jstransformer-jscss)

## Installation

    npm install jstransformer-jscss

## API

```js
var jscss = require('jstransformer')(require('jstransformer-jscss'));

var fixture = 'var white = "#fff";\n.content {\n  color: |white|;\n}';
var actual = jscss.render(fixture).body;
var expected = '.content { color: #fff; }';

console.log(actual);
//=> '.content { color: #fff; }'
```

## License

MIT
