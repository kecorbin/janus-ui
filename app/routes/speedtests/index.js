import Ember from 'ember';


export default Ember.Route.extend({

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

    //   [
    //   ['Date', 'Download', 'Upload'],
    //   ['2004', 1000, 400],
    //   ['2005', 1170, 460],
    //   ['2006', 660, 1120],
    //   ['2007', 1030, 540],
    // ],
    };
  }
});
