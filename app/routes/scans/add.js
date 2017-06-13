import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.get('store').findRecord('gateway', params.id);
    },

  actions: {
    createScan(gw) {
      // called when submit button is pushed
      let gateway = this.currentModel
      let controller = this.get('controller');

      var scan = this.store.createRecord('scan', {
        destination: controller.get("destination"),
        type: controller.get("type"),
        gateway: gateway
      });

      scan.save().then(() => this.transitionTo('gateways.show.scans', gateway));
    },
  }
});
