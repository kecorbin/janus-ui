import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createJob(job) {
      console.log(this)
      console.log("adding job for " + this.controller.newName )
      console.log("using image " + this.controller.image)
      //
      //this.transitionTo('jobs')
    }
  }
});
