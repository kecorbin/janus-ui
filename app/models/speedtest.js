import DS from 'ember-data';

export default DS.Model.extend({
  gateway: DS.belongsTo('gateway'),
  results: DS.attr(),
  processed: DS.attr('boolean'),
  type: DS.attr(),
  created: DS.attr('date')
});
