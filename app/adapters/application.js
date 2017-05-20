import DRFAdapter from './drf';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'collins-ui/config/environment';


export default DRFAdapter.extend(DataAdapterMixin, {
  addTrailingSlashes: true,
  host: ENV.apiHost,
  namespace: 'api/v1',
  authorizer: 'authorizer:drf-token-authorizer',
  
});
