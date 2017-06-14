import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: true,
  type: 'quick-vendor',
  types: Ember.String.w('quick-vendor scan'),

  actions: {
    selectType(type) {
      this.set('type', type)
    },
  },

});
