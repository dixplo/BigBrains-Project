import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code:DS.attr('string'), // propriet� persistente
  descriptif:DS.attr('string'), // propriet� persistente
  project:DS.belongsTo('project',{inverse:'stories'})
});
