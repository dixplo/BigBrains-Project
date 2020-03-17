// Route developpers
import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    model() {
            return this.get('store').findAll('developer');
        },
    addNew(identity, name){
      let store=this.get('store');
      console.log(store);
      let developer = this.get('store').createRecord('developer',{identity: identity, name: name}); // developer désigne le model
      console.log("//");
      console.log(developer);
      developer.save();




    }

  }
});
