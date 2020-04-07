import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { set } from '@ember/object';
import { get } from '@ember/object';

export default Route.extend({
  model(params){
    return this.get('store').findRecord('project',params.project_id);
  }



  /*async model(params){
    let proj = await this.get('store').findRecord('project',params.project_id); // definition "proj"
    return RSVP.hash({
      proj: proj,
      name: get(proj, "name"),
      descriptif: get(proj, "descriptif"),
      startDate: get(proj, "startDate"),
      dueDate: get(proj, "dueDate")
    })*/
/*  },
  async modal(params){
    let story = await this.store.query('story',{
      filter: {project: param.project_id}});
    return RSVP.hash({
      story: story,
      code: get(story,'code'),
      descriptif: get(story,'descriptif')
    })
  }*/
  /*renderTemplate() {
        this.render('projects.stories','projects', {
            into: 'projects.stories'
        });
    }*/
});
