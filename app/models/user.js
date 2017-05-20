import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr(),
    first_name: DS.attr(),
    last_name: DS.attr(),
    email: DS.attr(),
    is_active: DS.attr('boolean')

});
