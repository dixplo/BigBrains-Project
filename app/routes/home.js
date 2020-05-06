import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  async model() {
    EmberObject.create(this.store.findAll('project', { reload: true }));
    return RSVP.hash({
      projects: this.store.findAll('project', { reload: true })
    });
  }
});
