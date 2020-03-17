import Controller from '@ember/controller';
import {get,set} from '@ember/object';

export default Controller.extend({
  actions:{
    model() {
            return this.get('store').findAll('developer');
        }
  }
});
