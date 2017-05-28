import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('jobs', function() {
    this.route('add', { path: '/add' });
    this.route('show', { path: '/:id' });
    this.route('delete', { path: '/delete/:id' });
    this.route('scans');
  });
  this.route('results', function() {
    this.route('show', { path: '/:id' });

  });
  this.route('environments', function() {
    this.route('add', { path: '/:id'});
    this.route('show', { path: '/:id' });
  });
  this.route('tunnels', function() {
    this.route('add');
  });
  this.route('scans', function() {
    this.route('show', { path: '/:id'});
    this.route('add', { path: '/add'});
  });
  this.route('speedtests', function() {
    this.route('add', { path: '/add'});
  });
  this.route('login');
  this.route('plugins');
  this.route('gateways');
  this.route('sites');
  this.route('systems', function() {
    this.route('show');
  });
  this.route('device');
  this.route('devices', function() {
    this.route('show');
  });
});

export default Router;
