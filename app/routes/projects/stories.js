import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { set } from '@ember/object';
import { get } from '@ember/object';

export default Route.extend({
  model(params){
    return this.get('store').findRecord('project',params.project_id);
  },
  actions:{
    deleteStory(story, project, stories){
        stories.removeObject(story);
        project.save();
        story.deleteRecord();
        story.save();

    }
  }
});
