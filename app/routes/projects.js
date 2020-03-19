import Route from '@ember/routing/route';

export default Route.extend({
  model() {
          return this.get('store').findAll('project');
      },
<<<<<<< HEAD
  actions:{
    addNew(name, descriptif, startDate, dueDate){
      if(!name || !descriptif || !startDate || !dueDate){

      }
      else{
        let store=this.get('store');
        let project = this.get('store').createRecord('project',{name: name, descriptif: descriptif,startDate:startDate, dueDate: dueDate}); // developer désigne le model
        project.save();
      }
    },
    remove(project){
      project.deleteRecord();
      project.save();
    }
  }
=======
      actions:{
      remove(project){
        project.deleteRecord();
        project.save();
      }
    }
>>>>>>> a6cb747c66f402bf27c63325c4c9382b4a6506c4
});
