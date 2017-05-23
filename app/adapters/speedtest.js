import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  
  urlForCreateRecord(model, snapshot) {
    return ENV.apiHost + '/api/v1/jobs'
  }
});
