import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'environments': this.get('store').findAll('environment', { reload: true })
    };
  }
});
