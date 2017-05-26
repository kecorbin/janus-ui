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
  last_tested: DS.attr('date')

});
// user = models.ForeignKey(User, null=True, blank=True)
// mac = models.CharField(max_length=80)
// version = models.CharField(max_length=16, default='unknown')
// lanip = models.GenericIPAddressField(null=True, blank=True)
// # WAN IP will be reset on the server side based on the request
// wanip = models.CharField(max_length=32, default='unknown')
// hostname = models.CharField(max_length=64, unique=True)
// pubkey = models.CharField(max_length=512, null=True, blank=True)
// privkey = models.CharField(max_length=512, null=True, blank=True)
// # TODO: need to implement on_delete REQUIRES DATABASE MIGRATION
// cloudserver = models.ForeignKey(CloudServer, null=True, blank=True)
// created = models.DateTimeField(auto_now_add=True, auto_now=False)
// modified = models.DateTimeField(auto_now_add=False, auto_now=True)
// # Healthy will be set to true every time the gateway successfully updates itself,
// # Can also be used as a "ping" by setting this to false, and checking for it to
// # return to true
// healthy = models.BooleanField(default=False)
// # Setting Upgrade to True will enable automatic updates for the gateway agent
// upgrade = models.BooleanField(default=False)
// last_tested = models.DateTimeField(auto_now=True, null=True)
// # Polling interval specifies how often the gateway will poll the API for work
// polling_interval = models.SmallIntegerField(default=15)
