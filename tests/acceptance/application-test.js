import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Application', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('test a sentiment', function(assert) {
  visit('/');

  andThen(function() {
    var text = find('#testSentiment').text();
    assert.equal(text, '-2');
  });
});
