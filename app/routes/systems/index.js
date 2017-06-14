import Ember from 'ember';

export default Ember.Route.extend({
  model(gateway_id) {
    return {
      'systems': this.get('store').findAll('system', { reload: true })
    };
  }
});
