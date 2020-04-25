import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | projects/stories/tags/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:projects/stories/tags/index');
    assert.ok(route);
  });
});
