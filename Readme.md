
# morph-obj

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Morph an object so that it looks like another object

## Installation

    $ npm install @f/morph-obj

## Usage

morphObj deletes all the properties of the old object and then sets all the properties of the new object on it, so that they are deep equal.

E.g. `morph(a, b) // -> deepEqual(a, b)`

```js
var morph = require('@f/morph-obj')

function hotReloadComponent (old, new) {
  morph(old, new)
  forceUpdate()
}
```

## API

### morphObj(oldObj, newObj)

- `oldObj` - The object you want to make look like `newObj`
- `newObj` - Properties will be copied from `newObj` into `oldObj`

**Returns:** Returns and mutates `oldObj`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/morph-obj.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/morph-obj
[git-image]: https://img.shields.io/github/tag/micro-js/morph-obj.svg?style=flat-square
[git-url]: https://github.com/micro-js/morph-obj
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/morph-obj.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/morph-obj
