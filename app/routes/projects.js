import Route from '@ember/routing/route';
import { set } from '@ember/object';
import RSVP from 'rsvp';


export default Route.extend({
  model() {
    return RSVP.hash({
      projects: this.store.findAll('project'),
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
