import DS from 'ember-data';

export default DS.Model.extend({
  jobId: DS.attr(),
  result: DS.attr(),
  json: DS.attr(),
  pluginHTMLResponse: DS.attr(),
  pluginRawResponse: DS.attr()
});
