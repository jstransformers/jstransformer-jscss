/**
 * jstransformer-jscss <https://github.com/jstransformers/jstransformer-jscss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should render jscss template from a string', function(done) {
  var fixture = 'var white = "#fff";\n.content {\n  color: |white|;\n}';
  var actual = transform.render(fixture).body;
  var expected = '.content { color: #fff; }';

  test.equal(actual, expected);
  done();
});

test('should render jscss from a file', function(done) {
  var fixture = './test/fixture.css';
  var actual = transform.renderFile(fixture).body;
  var expected = fs.readFileSync('./test/expected.min.css', 'utf8');

  test.equal(actual, expected);
  done();
});

test('should render jscss from a file with pretty:true, async/promise', function(done) {
  var fixture = './test/fixture.css';
  var promise = transform.renderFileAsync(fixture, {pretty: true});
  var expected = fs.readFileSync('./test/expected.css', 'utf8');

  promise.then(function(actual) {
    actual = actual.body;
    test.equal(actual, expected);
    done();
  });
});
