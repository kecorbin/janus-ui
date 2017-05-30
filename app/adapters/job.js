import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  // override trailing slashes when we have nested
  host: ENV.apiHost,
  namespace: 'api/v1/act',

  addTrailingSlashes: false,
  urlForFindAll(model, snapshot) {
    return ENV.apiHost + '/api/v1/act/jobs/'
  },
  urlForCreateRecord(model, snapshot) {
    return ENV.apiHost + '/api/v1/act/jobs/'
  }
});
