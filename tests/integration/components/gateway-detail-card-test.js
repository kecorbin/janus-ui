import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gateway-detail-card', 'Integration | Component | gateway detail card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gateway-detail-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gateway-detail-card}}
      template block text
    {{/gateway-detail-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
