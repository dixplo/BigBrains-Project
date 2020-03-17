// Model developer
import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  identity:DS.attr('string'),
  name:DS.attr('string')
});
