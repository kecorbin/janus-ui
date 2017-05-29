import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';


export default ApplicationAdapter.extend({
  authorizer: 'authorizer:drf-token-authorizer',
  namespace: 'api/v1/connect',
  urlForCreateRecord(model, snapshot) {
    return ENV.apiHost + '/api/v1/connect/createtunnel/'
  }
});
