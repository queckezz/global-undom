# global-undom

> Run browser-specific code in node using [`undom`](https://github.com/developit/undom)

This module shims the global `document` object in non-browser environments. Excludes the shim if required by a browser environment (using the `browser` field in `package.json`). This allows for easy testing without something heavy-weight like [`jsdom`](https://github.com/tmpvar/jsdom).

[![npm version](https://img.shields.io/npm/v/global-undom.svg?style=flat-square)](https://npmjs.org/package/global-undom)
[![dependency status](https://img.shields.io/david/queckezz/global-undom.svg?style=flat-square)](https://david-dm.org/queckezz/global-undom)
[![license](https://img.shields.io/npm/l/global-undom.svg?style=flat-square)](./license)
[![code style: standard](https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Installation

```bash
$ npm install global-undom
```

## Example

```js
const document = require('global-undom')
// e.g. document.createTextNode()
```

## License

[MIT](./license)

