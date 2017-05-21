import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    var scan = this.get('store').findRecord('scan', params.id);

    return scan
  }
});
