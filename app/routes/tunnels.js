import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, AuthenticatedRouteMixin, {
  model() {
    return {
      'tunnels': this.get('store').findAll('tunnel', { reload: true })
    };
  }
});
