var test = require("./");

test('assert object', function (assert) {
  assert.plan(4);
  assert.equal(3.14, 3.14);
  assert.ok(true);
  assert.notOk(false);
  assert.deepEqual([3, 1, 4], [3, 1, 4]);
});
