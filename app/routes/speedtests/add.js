import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createSpeedTest(gw) {
      // called when submit button is pushed
      let gateway = this.currentModel
      let speedtest = this.store.createRecord('speedtest', {
        type: 'speedtest',
        gateway: gateway
      });
      speedtest.save().then(() => this.transitionTo('gateways.show.speedtests', gateway));
    }
  },
});
