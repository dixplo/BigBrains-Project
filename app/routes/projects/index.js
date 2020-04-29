import Route from '@ember/routing/route';
import { set } from '@ember/object';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';


export default Route.extend({
  async model() {
    EmberObject.create(this.store.findAll('project', { reload: true }));
    return RSVP.hash({

      projects: this.store.findAll('project', { reload: true }),
      developers: this.store.findAll('developer')
    });

      },

  actions:{
    remove(project){
      project.deleteRecord();
      project.save();
    },
    confirmDelete(model,project){
      set(model,'toDelete',project);
      $('.ui.modal.delete').modal('setting', 'closable', true).modal('show');
}
  }
});
