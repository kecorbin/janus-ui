import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('speedtest-results', 'Integration | Component | speedtest results', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{speedtest-results}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#speedtest-results}}
      template block text
    {{/speedtest-results}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
