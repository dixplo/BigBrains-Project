import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  async model(){
      return EmberObject.create({
        tag: {title:"",color:""},
        colors: [{ name: "Red", hexa: "#DB2828" },
                  { name: "Orange", hexa: "#F2711C" },
                  { name: "Yellow", hexa: "#FBBD08" },
                  { name: "Olive", hexa: "#b5cc18" },
                  { name: "Green", hexa: "#24BA45" },
                  { name: "Teal", hexa: "#00B5AD" },
                  { name: "Blue", hexa: "#2185D0" },
                  { name: "Purple", hexa: "#A333C8" },
                  { name: "Pink", hexa: "#E03997" },
                  { name: "Brown", hexa: "#A5673F" },
                  { name: "White", hexa: "#E5E5E5" },
                  { name: "Grey", hexa: "#767676" },
                  { name: "Black", hexa: "#1B1C1D" }]
                });
  },
  actions:{
  addNew(title,color,story){
   let error = !title
   if(error){
     set(story,'error',error);
   }
   else{
   let tag = this.get('store').createRecord('tag',{title:title,color:color});
   //get(story,'tags').pushObject(tag);
   tag.save();
   //Set des valeurs de l'input à RIEN pour avoir le form vide
   set(story,'title','');
   set(story,'tag.color','');
   set(story,'error','');
   this.transitionTo('projects.stories.new');
       }
 },
 cancel(id, model) {
   this.transitionTo('projects.stories');
   set(model,'error','');
 }
}
});
