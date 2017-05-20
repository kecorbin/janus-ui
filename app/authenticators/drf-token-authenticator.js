import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'collins-ui/config/environment';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: ENV.apiHost + '/api/v1/auth/',
        type: 'POST',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        Ember.run(function() {
          resolve({
            token: response.token
          });
        });
      }, (xhr, status, error) => {
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },
});
