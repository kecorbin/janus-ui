import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('jobs', function() {
    this.route('show', { path: '/:id' });
  });
  this.route('results', function() {
    this.route('show', { path: '/:id' });

  });
});

export default Router;
