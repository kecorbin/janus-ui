import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.get('store').findRecord('gateway', params.id);
    },

  actions: {
    createTunnel(gw) {
      // called when submit button is pushed
      let gateway = this.currentModel
      let controller = this.get('controller');

      var tunnel = this.store.createRecord('tunnel', {
        remotehost: controller.get("remotehost"),
        remoteport: controller.get("remoteport"),
        timeout: controller.get("timeout"),
        gateway: gateway
      });

      tunnel.save().then(() => this.transitionTo('gateways.show'));
    },
  }
});
