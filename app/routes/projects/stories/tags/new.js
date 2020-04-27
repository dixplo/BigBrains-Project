import Route from '@ember/routing/route';
import { set,get } from '@ember/object';

export default Route.extend({
  colors: [{ name: "red", hexa: "#DB2828" },
            { name: "orange", hexa: "#F2711C" },
            { name: "yellow", hexa: "#FBBD08" },
            { name: "olive", hexa: "#b5cc18" },
            { name: "green", hexa: "#24BA45" },
            { name: "teal", hexa: "#00B5AD" },
            { name: "blue", hexa: "#2185D0" },
            { name: "purple", hexa: "#A333C8" },
            { name: "pink", hexa: "#E03997" },
            { name: "brown", hexa: "#A5673F" },
            { name: "white", hexa: "#E5E5E5" },
            { name: "grey", hexa: "#767676" },
            { name: "black", hexa: "#1B1C1D" }],
  actions:{

  setColor(color,model){
      set('model','color',color);
    },
  addNew(title,color,id,story){
   let error = !title
   if(error){
     set(story,'error',error);
   }
   else{
   let tag = this.get('store').createRecord('tag',{title:title,color:color});
   //get(story,'tags').pushObject(tag);
   tag.save();
   //Set des valeurs de l'input à RIEN pour avoir le form vide
   set(story,'title','');
   set(story,'error','');
   //this.transitionTo('projects.stories',id);
       }
 },
 cancel(id, model) {
   this.transitionTo('projects.stories');
   set(model,'error','');
 }
}
});
