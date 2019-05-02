const assert = require('assert');
const any = require('./');

assert.deepEqual( any(123), 3 );
assert.deepEqual( any("hello"), 5 );
assert.deepEqual( any([ 1, 2, 3, 4, 5 ]), 5 );
assert.deepEqual( any({ a: "b", c: "d" } ), 2 );