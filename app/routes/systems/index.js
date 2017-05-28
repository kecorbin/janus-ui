import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'systems': this.get('store').findAll('system', { reload: true })
    };
  }
});
