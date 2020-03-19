import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  descriptif: DS.attr('string'), // proprieté persistente
  startDate: DS.attr('utc'),
  dueDate: DS.attr('utc')




});
