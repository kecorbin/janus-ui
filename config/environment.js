/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'collins-ui',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiHost = 'https://collins.interthings.io';
    // authentication
    ENV['ember-simple-auth'] = {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'jobs',
      routeIfAlreadyAuthenticated: 'tunnels',

    };


  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'hash';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.apiHost = 'https://test.interthings.io';
    // authentication
    ENV['ember-simple-auth'] = {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'jobs',
      routeIfAlreadyAuthenticated: 'tunnels',

    };

  }

  if (environment === 'production') {
    ENV.apiHost = 'https://test.interthings.io',
    // authentication
    ENV['ember-simple-auth'] = {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'jobs',
      routeIfAlreadyAuthenticated: 'tunnels',

    };

  }


  return ENV;
};
