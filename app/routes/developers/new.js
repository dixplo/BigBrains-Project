import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { set,get } from '@ember/object';

export default Route.extend({
  actions:{
      addNew(model){

        this.get('store').createRecord('developer',{
          identity: get(model,"identity"),
          name: get(model,"name"),
          fname: get(model,"fname")
        }).save();
        this.transitionTo("/developers");

      },
      backToDev(){
        this.transitionTo("/developers");
      }
  }
});
