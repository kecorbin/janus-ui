import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';


export default ApplicationAdapter.extend({
  host: ENV.apiHost,
  authorizer: 'authorizer:drf-token-authorizer',
  // namespace: 'api/v1/connect',
  // urlForCreateRecord(model, snapshot) {
  //   return ENV.apiHost + '/api/v1/connect/createtunnel/'
  // }
  buildURL: function(type, id, snapshot) {
    console.log(snapshot)
    return '/gateways/' + snapshot.record.get('gateway.hostname') + '/tunnels/'
  }
});
