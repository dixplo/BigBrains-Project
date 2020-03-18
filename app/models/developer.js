// Model developer
import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  identity:DS.attr('string'), // Pseudo
  name:DS.attr('string'),
  fname:DS.attr('string')
});
