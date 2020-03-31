import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get,set } from '@ember/object';

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
},
  actions:{
    edit(model){
        let proj = get(model,"proj");
        proj.set("name",model.name);
        proj.set("descriptif",model.descriptif);
        proj.set("startDate",model.startDate);
        proj.set("dueDate",model.dueDate);
        proj.save();
        this.transitionTo("/projects");
      }
  }
});
