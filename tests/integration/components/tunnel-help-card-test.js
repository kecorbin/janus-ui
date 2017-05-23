import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tunnel-help-card', 'Integration | Component | tunnel help card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tunnel-help-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tunnel-help-card}}
      template block text
    {{/tunnel-help-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
