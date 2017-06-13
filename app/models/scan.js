import DS from 'ember-data';

export default DS.Model.extend({
  gateway: DS.belongsTo('gateway'),
  destination: DS.attr(),
  type: DS.attr(),
  processed: DS.attr('boolean'),
  ports: DS.attr(),
  results: DS.attr(),
  created: DS.attr('date'),
  modified: DS.attr('date'),

});
