import DRFAdapter from './drf';
import ENV from 'collins-ui/config/environment';

export default DRFAdapter.extend({
  addTrailingSlashes: false,
  host: ENV.apiHost,
  namespace: 'api/v1'
});
