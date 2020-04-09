import Route from '@ember/routing/route';
import { set,get } from '@ember/object';

export default Route.extend({
  actions:{
   addNew(code,description, project){
     let story = this.get('store').createRecord('story',{code:code,description:description});
     set(story,'project',project);
     story.save().then(()=>{
       project.save().then(()=>{this.transitionTo('projects');});
     });
   },
   cancel() {
     this.transitionTo('projects');
   }
 }
});
