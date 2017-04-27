import DS from 'ember-data';
import ENV from 'collins-ui/config/environment';

// export default DS.JSONAPIAdapter.extend({
export default DS.RESTAdapter.extend({
  host: ENV.apiHost,
  namespace: 'api/v1'
});
