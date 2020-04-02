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
    addNew(dev,ident,name,fname){
      if(!ident || !name || !fname){}
      else{
        this.get('store').createRecord('developer',dev).save();
      }},
    remove(developer){
      developer.deleteRecord();
      developer.save();
    },
    //A finir => validation de suppression d'un dev
    confirmDelete(model,dev){
      set(model,'toDelete',dev);
      $('.ui.modal').modal('setting', 'closable', true).modal('show');
    },
    transitionAdd(){
      this.transitionTo("/developers/new");
    }
}
});
