import Ember from 'ember';

export default Ember.Controller.extend({
  semantic: Ember.inject.service(),
  testSentiment: function () {
    var sentimentAnalyser = this.get('semantic');
    return sentimentAnalyser.sentiment('abandon, worthy zealot!');
  }.property()
});
