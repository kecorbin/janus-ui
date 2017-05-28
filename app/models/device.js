import DS from 'ember-data';

export default DS.Model.extend({
  dev_name: DS.attr('string'),
  ip: DS.attr('string'),
  uniqueid: DS.attr('string'),
  status: DS.attr('string'),
  mfg: DS.attr('string'),
  model: DS.attr('string'),
  firmware: DS.attr('string'),
  note: DS.attr('string'),
})
