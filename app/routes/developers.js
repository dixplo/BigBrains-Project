// Route developpers
import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { set } from '@ember/object';

export default Route.extend({
  model() {
    return RSVP.hash({
      developers: this.get('store').findAll('developer'),
      dev: EmberObject.create()
        });
      },

  actions:{
    remove(developer){
      developer.deleteRecord();
      developer.save();
    },
    confirmDelete(model,dev){
      set(model,'toDelete',dev);
      $('.ui.modal').modal('setting', 'closable', true).modal('show');
    },
    transitionAdd(){
      this.transitionTo("/developers/new");
    }
}
});
