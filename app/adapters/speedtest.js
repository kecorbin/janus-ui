import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  // determine appropriate POST url
  urlForCreateRecord(modelName, snapshot) {
    let gateway = snapshot.belongsTo('gateway');
    return `${this.host}/${this.namespace}/connect/gateways/${gateway.id}/speedtests`;
  }
});
