import DS from 'ember-data';

export default DS.Model.extend({
  remotehost: DS.attr('string'),
  remoteport: DS.attr('number'),
  proxyport: DS.attr(),
  timeout: DS.attr('number'),
  sourceip: DS.attr('string'),
  processed: DS.attr('boolean'),
  url: DS.attr('string'),
  created: DS.attr('date'),
});
