import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log("Payload: " + payload);
    console.log("ID: " + id);

    payload.links = {
      results: `results`
    };
    return this._super(...arguments);
  }
});
