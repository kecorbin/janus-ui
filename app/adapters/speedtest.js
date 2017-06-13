import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    let gateway = snapshot.belongsTo('gateway').id;
    return `${this.host}/${this.namespace}/connect/gateways/${gateway}/speedtests`;
  }
});
