import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: true,
  actions: {
    closeModalDialog(){
      let gateway = this.get('model');
      this.set('isShowingModal', false).then(this.transitionToRoute('gateways.show.speedtests', gateway))
    }
  }
});
