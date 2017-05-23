import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  routeAfterAuthentication: 'jobs',
  routeIfAlreadyAuthenticated: 'tunnels',
  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:drf-token-authenticator', username, password).catch((reason) => {
        this.set('error', reason);
      });
    }
  }
});
