import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return {
      'gateways': this.get('store').findAll('gateway', { reload: true }),
      'chartdata': this.generatedata()
    };
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
});
