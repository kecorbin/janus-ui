import DRFSerializer from './drf';

export default DRFSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    if (payload instanceof Array) {
        payload.forEach(parseResults)
    }
    else {
      parseResults(payload)
    }

    // if url contains None, we null it out
    function parseResults(tunnel) {
      if (tunnel.url.includes('None')) {
          tunnel.url = null
      }

      return tunnel
    }
    return this._super(...arguments);
  },

  attrs: {
    sourceip: { serialize: false },
  }
});
