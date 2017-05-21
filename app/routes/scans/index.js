import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return {
      'scans': this.get('store').findAll('scan', { reload: true })
    };
  }
});
