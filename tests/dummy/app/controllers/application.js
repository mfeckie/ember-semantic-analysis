import Ember from 'ember';

export default Ember.Controller.extend({
  semantic: Ember.inject.service(),
  text: 'abandon, worthy zealot!',
  testSentiment: Ember.computed('things', function() {
    return this.get('semantic').sentiment(this.get('text'));
  })
});
