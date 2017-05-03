import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        deleteJob: function() {
            console.log(this);
            this.get('job').destroyRecord();
        }
    }
});
