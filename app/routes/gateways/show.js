import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('gateway', params.id)
  },
  actions: {
    createSpeedTest(gateway) {
      // called when submit button is pushed
      let speedtest = this.store.createRecord('speedtest', {
        type: 'speedtest',
        gateway: gateway
      });
      speedtest.save().then(() => this.transitionTo('speedtests'));
    }
  },



});
