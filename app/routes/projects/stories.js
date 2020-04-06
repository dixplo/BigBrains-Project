import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import EmberObject from '@ember/object';
import { set } from '@ember/object';
import { get } from '@ember/object';

export default Route.extend({
  async model(params){
    let proj = await this.get('store').findRecord('project',params.project_id); // definition "proj"
    return RSVP.hash({
      proj: proj,
      name: get(proj, "name"),
      descriptif: get(proj, "descriptif"),
      startDate: get(proj, "startDate"),
      dueDate: get(proj, "dueDate"),
    })
  }
});
