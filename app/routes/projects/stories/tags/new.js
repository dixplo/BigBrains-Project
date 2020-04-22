import Route from '@ember/routing/route';
import { set,get } from '@ember/object';

export default Route.extend({
  actions:{
 addNew(title,id,story){
   let error = !title
   if(error){
     set(story,'error',error);
   }
   else{
   let tag = this.get('store').createRecord('tag',{title:title});
   set(story,'tag',tag);
   tag.save().then(()=>{story.save();});
   //Set des valeurs de l'input à RIEN pour avoir le form vide
   set(story,'title','');

   //this.transitionTo('projects.stories',id);

 }}}
});
