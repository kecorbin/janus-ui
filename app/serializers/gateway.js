import DRFSerializer from './drf';

export default DRFSerializer.extend({
  primaryKey: 'hostname',
  normalizeResponse(store, primaryModelClass, payload) {
   payload.links = {
     tunnels: `tunnels/`,
     speedtests: `speedtests/`,
     scans: `scans/`,
     systems: `systems/`
   };
   return this._super(...arguments);
 }
});
