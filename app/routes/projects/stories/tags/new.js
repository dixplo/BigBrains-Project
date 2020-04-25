import Route from '@ember/routing/route';
import { set,get } from '@ember/object';

export default Route.extend({
  actions:{
 addNew(title,color,id,story){
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
   set(story,'error','');
   //this.transitionTo('projects.stories',id);
       }
 },
 cancel(id, model) {
   this.transitionTo('projects.stories');
   set(model,'error','');
 }
}
});
