import Route from '@ember/routing/route';
import { set,get } from '@ember/object';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';

export default Route.extend({
  model(param) {
    
    return RSVP.hash({
      //Informations story
      story: story,
      code: get(story, "code"),
      description: get(story, "description"),
      id: get(story,"project"),
      //Informations tags
      tags: this.get('store').findAll('tag'),
      tag: EmberObject.create()
        });
      },
  actions:{
    cancel(id, model) {
      this.transitionTo('projects.stories');
      set(model,'error','');
    }
  }
});
