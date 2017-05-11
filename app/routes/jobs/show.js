import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const job = this.modelFor('job');
    return this.store.query('result', { param: job });
    }
});
