import Ember from 'ember';


export default Ember.Route.extend({

  actions: {
    createSpeedTest() {
      // called when submit button is pushed

      // gather info
      let controller = this.get('controller');

      let speedtest = this.store.createRecord('speedtest', {
        type: 'speedtest',


      });
      speedtest.save().then(() => this.transitionTo('speedtests'));

    }
  },

  generatedata() {
    var dataMap = [['Date', 'Download', 'Upload']]
    var store = this.get('store').findAll('speedtest').then(
      function(results) {
        results.forEach(function(r) {
          var resultMap = [
            r.get('created'),
            parseFloat(r.get('results').download),
            parseFloat(r.get('results').upload)
          ]
          dataMap.push(resultMap)
        }
        )
      }
    )
    return dataMap
  },
  model() {
    return {
      'speedtests': this.get('store').findAll('speedtest', { reload: true }),
      'chartdata': this.generatedata()
    };
  }
});
