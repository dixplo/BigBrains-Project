import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name:DS.attr('string'),
  descriptif:DS.attr('string'), // propriet� persistente
  startDate:DS.attr('date'),
  dueDate:DS.attr('date')

});
