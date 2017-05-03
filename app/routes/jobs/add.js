import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createJob() {
      // called when submit button is pushed

      // gather info
      let controller = this.get('controller');

      let job = this.store.createRecord('job', {
        name: controller.get("name"),
        image: controller.get("image"),
        interval: {every: controller.get("every"),
                   period: controller.get("period")},
        queue: controller.get("queue"),

      });
      job.save()

      // redirect user back to jobs page
      //this.transitionTo('jobs')
    }
  }
});
