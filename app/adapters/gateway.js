import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: ENV.apiHost,
  namespace: 'api/v1/connect',
});
