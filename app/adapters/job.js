import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  host: ENV.collinsHost,
  namespace: 'api/v1',
});
