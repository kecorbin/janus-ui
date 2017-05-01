import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Chartist.Pie('#chart',
        {
          series: [this.passed_count, this.failed_count],
          colors: ["#0f0", "#f00"]
        }

    )
  }});
