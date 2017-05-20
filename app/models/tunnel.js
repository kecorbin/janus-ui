import DS from 'ember-data';

export default DS.Model.extend({
  remotehost: DS.attr('string'),
  remoteport: DS.attr('number'),
  proxyport: DS.attr('string'),
  timeout: DS.attr('number'),
  sourceip: DS.attr('string'),
  processed: DS.attr('boolean'),
  url: DS.attr('string'),
});
