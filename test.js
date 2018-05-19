const test = require('tape');
const dateInUtc = require('.');

test('convert with utc offset ->> 0', (assert) => {
  const actual = dateInUtc(0, new Date('2018-4-25 18:30'));
  const expected = '2018-4-25 12:30:00';

  assert.equal(actual.toLocaleString(), expected);
  assert.equal(actual.getTime(), new Date(expected).getTime());
  assert.end();
});


test('convert with utc offset ->> 5.5', (assert) => {
  const actual = dateInUtc(5.5, new Date('2018-4-25 18:30'));
  const expected = '2018-4-25 18:00:00';

  assert.equal(actual.toLocaleString(), expected);
  assert.equal(actual.getTime(), new Date(expected).getTime());
  assert.end();
});


test('convert with utc offset ->> -12', (assert) => {
  const actual = dateInUtc(-12, new Date('2018-4-25 18:30'));
  const expected = '2018-4-25 00:30:00';

  assert.equal(actual.toLocaleString(), expected);
  assert.equal(actual.getTime(), new Date(expected).getTime());
  assert.end();
});
