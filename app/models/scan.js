import DS from 'ember-data';

export default DS.Model.extend({
  destination: DS.attr(),
  type: DS.attr(),
  processed: DS.attr('boolean'),
  ports: DS.attr(),
  results: DS.attr(),
  created: DS.attr(),
  modified: DS.attr(),

});
