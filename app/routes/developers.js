// Route developpers
import Route from '@ember/routing/route';
import Developers from 'boards/class/developers-class';

export default Route.extend({
  model() {
          return this.get('store').findAll('developer');
      },
  actions:{
    addNew(identity, name, fname){
      if(!identity || !name || !fname){

      }
      else{
        let store=this.get('store');
        let developer = this.get('store').createRecord('developer',{identity: identity, name: name,fname:fname}); // developer désigne le model
        developer.save();
      }

    },
    remove(developer){
      developer.deleteRecord();
      developer.save();
    }
  }
});
