import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'results': this.get('store').findAll('result', { reload: true })
    };
  }
});
