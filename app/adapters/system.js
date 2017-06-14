import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    let gateway = snapshot.belongsTo('gateway');
    return `${this.host}/${this.namespace}/connect/gateways/${gateway}/systems`;
  }
});
