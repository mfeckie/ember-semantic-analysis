import Ember from 'ember';

export default Ember.Controller.extend({
  testSentiment: function () {
    console.log(this);
    var sentimentAnalyser = this.container.lookup('service:semantic');
    return sentimentAnalyser.sentiment('abandon, worthy zealot!');
  }.property()
});
