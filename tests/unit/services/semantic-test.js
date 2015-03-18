import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:semantic', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('it has words', function(assert) {
  var service = this.subject();
  assert.equal(service.words.abandon, -2);
});

test('with the single word abandon returns -2', function(assert) {
  var service = this.subject();
  var testString = "abandon";
  assert.equal(service.sentiment(testString), -2);
});

test('strips non-words and extra spaces from string', function(assert) {
  var service = this.subject();
  var testString = "abandon,    !@#$%^&*()_  \t\nthe.world!";
  assert.equal(service.stripNonWords(testString), "abandon the world");
});

test('with the words abandon worth returns 0', function(assert) {
  var service = this.subject();
  var testString = "abandon, worthy!";
  assert.equal(service.sentiment(testString), 0);
});

test('with the words yucky yummy zealot returns -1', function(assert) {
  var service = this.subject();
  var testString = "yucky!yummy*zealot muggle";
  assert.equal(service.sentiment(testString), -1);
});
