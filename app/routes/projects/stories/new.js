import Route from '@ember/routing/route';
import { set,get } from '@ember/object';

export default Route.extend({
  actions:{
   addNew(code, description, project, id){
     let story = this.get('store').createRecord('story',{code:code,description:description});
     set(story,'project',project);
     story.save().then(()=>{
       project.save().then(()=>{this.transitionTo('projects.stories',id);});
     });
   },
   cancel(id) {
     this.transitionTo('projects.stories',id);
   }
 }
});
