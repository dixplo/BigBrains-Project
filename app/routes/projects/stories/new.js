import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
import Store from '@ember-data/store';

export default Route.extend({
  actions:{
    //action 'addNew' model.code model.description model model.id
   addNew(code, description, project, id){
     let error = !code || !description
     if(error){
       set(project,'error',error);
     }
     else{
     let story = this.get('store').createRecord('story',{code:code,description:description});
     set(story,'project',project);
     story.save().then(()=>{project.save();});
      //Set des valeurs de l'input à RIEN pour avoir le form vide
      set(project,'code','');
      set(project,'description','');
      this.transitionTo('projects.stories',id);
         }},
   cancel(id, model) {
     this.transitionTo('projects.stories',id);
     set(model,'error','');
   }
 }
});
