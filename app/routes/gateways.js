import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return {
      'gateways': this.get('store').findAll('gateway', { reload: true })
    };
  }
});
