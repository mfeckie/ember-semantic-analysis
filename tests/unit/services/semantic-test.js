import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:semantic', {});

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

test('deals with mixed case', function (assert) {
  var service = this.subject();
  var testString = "Yucky!yUmmy*zealot muggle";
  assert.equal(service.sentiment(testString), -1);
});

test('returns more detailed analysis', function(assert) {
  var service = this.subject();
  var testString = "Mr Dursley was furious when Harry made Aunt Marge float away!";
  var result = service.detailedSentiment(testString);
  assert.equal(result.positive, 0);
  assert.equal(result.negative, 1);
  assert.equal(result.count, 11);
  assert.equal(result.negRatio, 0.09090909090909091);
  assert.equal(result.posRatio, 0);
});
