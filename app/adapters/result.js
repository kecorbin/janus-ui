import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  host: ENV.apiHost,
  // namespace: 'api/v1/act',
});
