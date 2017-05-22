import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createTunnel() {
      // called when submit button is pushed

      // gather info
      let controller = this.get('controller');

      let tunnel = this.store.createRecord('tunnel', {
        remotehost: controller.get("remotehost"),
        remoteport: controller.get("remoteport"),
        timeout: controller.get("timeout"), 


      });
      tunnel.save().then(() => this.transitionTo('tunnels'));

    }
  }
});
