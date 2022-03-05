import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { foo } from 'my-addon/test-support';

module('v2 addon tests', function (hooks) {
  setupRenderingTest(hooks);

  test('the test', async function (assert) {
    assert.ok(foo);
  });
});
