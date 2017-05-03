import DRFSerializer from './drf';

export default DRFSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
   payload.links = {
     results: `results/`
   };
   return this._super(...arguments);
 }
});
