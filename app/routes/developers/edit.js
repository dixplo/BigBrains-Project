import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get,set } from '@ember/object';

export default Route.extend({
  async model(params){
    let dev = await this.get('store').findRecord('developer',params.developer_id);
    return RSVP.hash({
      dev: dev,
      name: get(dev, "name"),
      fname: get(dev, "fname"),
      identity: get(dev, "identity")
    })
},
  actions:{
    edit(model){
        let dev = get(model,"dev");
        dev.set("name",model.name);
        dev.set("fname",model.fname);
        dev.set("identity",model.identity);
        dev.save();
        this.transitionTo("/developers");
      }
  }
});
