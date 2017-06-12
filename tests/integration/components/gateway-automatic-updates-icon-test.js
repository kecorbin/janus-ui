import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gateway-automatic-updates-icon', 'Integration | Component | gateway automatic updates icon', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gateway-automatic-updates-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gateway-automatic-updates-icon}}
      template block text
    {{/gateway-automatic-updates-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
