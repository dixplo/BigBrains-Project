import Adapter from 'ember-local-storage/adapters/local';
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default Adapter.extend({
  modelNamespace: 'boards'
});
