import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';


export default ApplicationAdapter.extend({
  authorizer: 'authorizer:drf-token-authorizer',

  urlForCreateRecord(model, snapshot) {
    return ENV.apiHost + '/api/v1/createtunnel'
  }
});
