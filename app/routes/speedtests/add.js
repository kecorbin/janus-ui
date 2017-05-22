import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createSpeedTest() {
      // called when submit button is pushed

      // gather info
      let controller = this.get('controller');

      let speedtest = this.store.createRecord('job', {
        type: 'speedtest',


      });
      speedtest.save().then(() => this.transitionTo('speedtests'));

    }
  }
});
