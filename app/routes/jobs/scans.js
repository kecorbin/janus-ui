import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'jobs': this.get('store').findAll('job', { reload: true })
    };
  }
});
