const assert = require('assert');

assert.equal(50, 50); // OK
assert.equal(50, 70); // AssertionError: 50 == 70
