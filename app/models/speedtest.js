import DS from 'ember-data';

export default DS.Model.extend({
  jobId: DS.belongsTo('job'),
  results: DS.attr(),
  processed: DS.attr('boolean'),
  
});
