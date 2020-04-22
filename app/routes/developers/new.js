import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { get,set } from '@ember/object';


export default Route.extend({
  actions:{
      addNew(model){
        let error = !model.identity || !model.name || !model.fname;
        if(error){
          set(model,'error',error);
        }
        else{
          this.get('store').createRecord('developer',{
            identity: get(model,"identity"),
            name: get(model,"name"),
            fname: get(model,"fname")
          }).save();
          set(model,'name','');
          set(model,'identity','');
          set(model,'fname','');
          this.transitionTo("/developers");
          }
      },
      backToDev(model){
        set(model,'error','');
        this.transitionTo("/developers");
      }
  }
});
