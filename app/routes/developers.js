// Route developpers
import Route from '@ember/routing/route';
import Developers from 'boards/class/developers-class';

export default Route.extend({
  actions:{
    model() {
            return this.get('store').findAll('developer');
        },
    addNew(identity, name){
      let store=this.get('store');
      let developer = this.get('store').createRecord('developer',{identity: identity, name: name}); // developer désigne le model
      developer.save();
    }

  }
});
