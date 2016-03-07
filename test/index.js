/**
 * Imports
 */

var morphObj = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(morphObj({a: 1}, {b: 2}), {b: 2})
  t.end()
})
