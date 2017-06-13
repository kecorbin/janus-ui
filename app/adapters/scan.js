import ApplicationAdapter from './application';
import ENV from 'collins-ui/config/environment';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    let gateway = snapshot.belongsTo('gateway');
    return `${this.host}/${this.namespace}/connect/gateways/${gateway.id}/scans`;
  }

});
