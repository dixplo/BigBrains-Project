import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { get } from '@ember/object';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  async model(params){
    let story = await this.get('store').findRecord('story',params.story_id); // definition "story"

    return RSVP.hash({
      story: story,
      code: get(story, "code"),
      description: get(story, "description")
    })
},
  actions:{
   cancel(id, model) {
     this.transitionTo('projects.stories',id);
     set(model,'error','');
   },
   editStory(model, id){
     let error = !model.code || !model.description;
     if(error){
       set(model,'error',error);
     }
     else{
       let story = get(model,"story");
       story.set("code",model.code);
       story.set("description",model.description);
       story.save();
       this.transitionTo('projects.stories',id);
     }
   }
 }
});
