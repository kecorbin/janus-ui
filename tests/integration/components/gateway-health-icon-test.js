import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gateway-health-icon', 'Integration | Component | gateway health icon', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gateway-health-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gateway-health-icon}}
      template block text
    {{/gateway-health-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
