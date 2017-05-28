import Ember from 'ember';

export default Ember.Controller.extend({
  type: null,
  types: Ember.String.w('quick-vendor scan'),
  actions: {
    selectType(type) {
      this.set('type', type)
    }
  }
});
