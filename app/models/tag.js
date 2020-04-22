import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title:DS.attr('string'),
  story:DS.belongsTo('story',{inverse:'tags'})


});
