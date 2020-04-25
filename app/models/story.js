import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code:DS.attr('string'), // propriet� persistente
  description:DS.attr('string'), // propriet� persistente
  project:DS.belongsTo('project',{inverse:'stories'}),
  tags:DS.hasMany('tag')
});
