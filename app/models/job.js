import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  last_result: DS.attr(),
  environment: DS.attr(),
  enabled: DS.attr(),
  interval: DS.attr(),
  queue: DS.attr()
});
