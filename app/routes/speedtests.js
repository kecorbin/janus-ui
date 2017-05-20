import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'speedtests': this.get('store').findAll('speedtest', { reload: true })
    };
  }
});
