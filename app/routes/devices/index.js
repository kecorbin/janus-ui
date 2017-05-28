import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'devices': this.get('store').findAll('device', { reload: true })
    };
  }
});
