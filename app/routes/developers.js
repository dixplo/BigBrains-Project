// Route developpers
import Route from '@ember/routing/route';
import Developers from 'boards/class/developers-class';

export default Route.extend({

  model() {
    return this.get('store').findAll('developer');
      }
});
