import Ember from 'ember';

export default Ember.Controller.extend({
  type: null,
  types: Ember.String.w('quick-vendor scan'),
  actions: {
    selectType(type) {
      this.set('type', type)
    },
    createScan() {
      // called when submit button is pushed
      console.log(this.get('type'))
      // gather info
      let scan = this.store.createRecord('scan', {
        destination: this.get("destination"),
        type: this.type,
      });
      scan.save().then(() => this.transitionTo('scans'));

    }
  }

});
