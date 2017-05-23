import DRFSerializer from './drf';

export default DRFSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
  if (payload) {
      payload.forEach(parseResults)
  }
  else {
    parseResults(payload)
  }

  // create object from json string
  function parseResults(result) {
    var obj = JSON.parse(result.results)
    result.results = obj
    return result
  }
   return this._super(...arguments);
 },

 attrs: {
     processed: { serialize: false },
     jobId: { serialize: false },
   }

});
