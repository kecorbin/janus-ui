import DS from 'ember-data';

export default DS.Model.extend({
  mac: DS.attr('string'),
  version: DS.attr('string'),
  lanip: DS.attr('string'),
  wanip: DS.attr('string'),
  pubkey: DS.attr('string'),
  privkey: DS.attr('string'),
  cloudserver: DS.attr('string'),
  created: DS.attr('date'),
  healthy: DS.attr('boolean'),
  upgrade: DS.attr('boolean'),
  last_tested: DS.attr('date'),
  tunnels: DS.hasMany('tunnel', { async: true }),
  scans: DS.hasMany('scan', { async: true}),
  speedtests: DS.hasMany('speedtest', { async: true})
});
