# Any Length
Return length of any type.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save any-length
```
    
```js

const anyLength = require('any-length');

console.log( anyLength(123), 3 ); // return 3

console.log( anyLength("foo"), 3 ); // return 3

console.log( anyLength([ 1, 2, 3, 4, 5 ]), 5 ); // return 5

console.log( anyLength({ a: "b", c: "d" } ), 2 ); // return 2

```

### Running tests
```sh
$ node test.js
```

### License

Released under the [MIT License](LICENSE).