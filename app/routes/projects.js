import Route from '@ember/routing/route';

export default Route.extend({
  model() {
          return this.get('store').findAll('project');
      },

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
});
