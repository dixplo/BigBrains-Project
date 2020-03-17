import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code:DS.attr('string'), // proprieté persistente
  descriptif:DS.attr('string') // proprieté persistente



});
