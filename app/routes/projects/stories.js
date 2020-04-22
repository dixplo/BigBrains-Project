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
    confirmDelete(model){
      //set(model,'toDelete');
      $('.ui.modal.delete').modal('setting', 'closable', true).modal('show');
},
    deleteStory(story, project, stories){
        //Suppression de la référence dans le projet
        stories.removeObject(story);
        project.save();
        //Suppression de la story
        story.deleteRecord();
        story.save();
    }
  }
});
