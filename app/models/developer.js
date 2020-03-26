// Model developer
import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  identity:DS.attr(), // Pseudo
  name:DS.attr(),
  fname:DS.attr()
});
