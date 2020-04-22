import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | /projects/stories/tags/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:/projects/stories/tags/new');
    assert.ok(route);
  });
});
