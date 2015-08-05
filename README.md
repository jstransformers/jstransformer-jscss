# jstransformer-jscss

[JSCSS](https://github.com/AlexanderSelzer/jscss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jscss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jscss)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jscss/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jscss?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jscss/master.svg)](http://david-dm.org/jstransformers/jstransformer-jscss)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jscss.svg)](https://www.npmjs.org/package/jstransformer-jscss)


## Installation

```
npm install jstransformer-jscss
```

## API
> See full example in [test fixture](./test/input.css) or visit [JSCSS's readme](https://github.com/AlexanderSelzer/jscss)

```js
var jscss = require('jstransformer')(require('jstransformer-jscss'));

var input = 'var color = "#d02783"; div { background: |color|; }';
jscss.render(input).body
//=> 'div { background: #d02783; }'
```

## Related
- [dush](https://github.com/tunnckocore/dush): Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [jscss-lite](https://github.com/tunnckocore/jscss-lite): Write Javascript-ish things in your CSS. Or call it `Embedded CSS` - write CSS in your Javascript!
- [octet](https://github.com/tunnckocore/octet): 1kb template engine for the browser and nodejs. Support helpers, partials and more.

## License

MIT
