import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name:DS.attr('string'),
  descriptif:DS.attr('string'), // proprieté persistente
  startDate:DS.attr('date'),
  dueDate:DS.attr('date')

});
