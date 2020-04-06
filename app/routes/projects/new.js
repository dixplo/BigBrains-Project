import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { set,get } from '@ember/object';

export default Route.extend({
  actions:{
      addNew(model){
        let error = !model.name || !model.descriptif || !model.startDate || !model.dueDate;
        if(error){
          set(model,'error',error);
        }
        else{
        this.get('store').createRecord('project',{
          name: get(model,"name"),
          descriptif: get(model,"descriptif"),
          startDate: get(model,"startDate"),
          dueDate: get(model,"dueDate"),
        }).save();
        this.transitionTo("/projects");}

      },
      backToProj(model){
        set(model,'error','');
        this.transitionTo("/projects");
      }
  }
});
