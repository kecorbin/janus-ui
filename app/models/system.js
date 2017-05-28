import DS from 'ember-data';

export default DS.Model.extend({
  boot_flag: DS.attr('number'),
  ctl_mfg: DS.attr('string'),
  job_name: DS.attr('string'),
  mod_version: DS.attr('string'),
  system_id: DS.attr('string')
})
