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
    addNew(name, descriptif, startDate, dueDate){
      if(!name || !descriptif || !startDate || !dueDate){}
      else{
        alert(dev);
        let store=this.get('store');
        let project = this.get('store').createRecord('project',{name: name, descriptif: descriptif,startDate:startDate, dueDate: dueDate, developer: "test"});
        project.save();
      }
    },
    remove(project){
      project.deleteRecord();
      project.save();
    },
    confirmDelete(model,project){
      model.set('toDelete',project);
      $('.ui.modal.delete').modal('setting', 'closable', true).modal('show');
}
  }
});
