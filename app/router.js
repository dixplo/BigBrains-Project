import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit', {path: 'developer/:developer_id'});
  });
  this.route('projects', function() {
    this.route('new');
    this.route('edit', {path: 'project/:project_id'});
    this.route('stories', {path: 'project/stories/:project_id'}, function() {
      this.route('new');
      this.route('edit', {path: 'edit/:story_id'});
    });
  });
  this.route('home');
  this.route('hello');
});

export default Router;
