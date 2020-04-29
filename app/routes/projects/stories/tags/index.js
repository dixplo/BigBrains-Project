import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { filter } from '@ember/object/computed';

export default Route.extend({
  model(param) {
    let story = this.get('store').findRecord('story',param.story_id);
    return RSVP.hash({
      //Informations story
      story: story,
      code: get(story, "code"),
      description: get(story, "description"),
      id: get(story,"project"),
      tagsStory: get(story,"tags"),
      //Informations tags
      tags: this.get('store').findAll('tag'),
      tag: EmberObject.create()
        });
      },
  actions:{
    addTagToStory(tag,story){
        get(story,'tags').pushObject(tag);
        story.save();
      },
    deleteTag(tag){
          tag.deleteRecord();
          tag.save();
    },
    cancel(id, model) {
      this.transitionTo('projects.stories');
    },
    test(){
      this.transitionTo('projects.stories');
    }
  }
});
