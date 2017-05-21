import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createScan() {
      // called when submit button is pushed

      // gather info
      let controller = this.get('controller');

      let scan = this.store.createRecord('scan', {
        destination: controller.get("destination"),
        type: controller.get("type"),


      });
      scan.save().then(() => this.transitionTo('scans'));

    }
  }
});
