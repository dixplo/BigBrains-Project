// Route developpers
import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    model() {
            return this.get('store').findAll('developer');
        }
  }
});
