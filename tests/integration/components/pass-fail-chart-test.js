import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pass-fail-chart', 'Integration | Component | pass fail chart', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pass-fail-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pass-fail-chart}}
      template block text
    {{/pass-fail-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
