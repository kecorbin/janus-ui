
var job2 = {
  "id": 2,
  "name": "99",
  "type": "DockerJob",
  "image": "always_pass",
  "last_result": "Passed",
  "environment": null,
  "enabled": true,
  "interval": {
    "id": 2,
    "every": 15,
    "period": "seconds"
  },
  "queue": "SITE_1"
}

var job3 = {
  "id": 3,
  "name": "916",
  "type": "DockerJob",
  "image": "always_pass",
  "last_result": "Passed",
  "environment": null,
  "enabled": true,
  "interval": {
    "id": 2,
    "every": 15,
    "period": "seconds"
  },
  "queue": "SITE_1"
}

var job4 = {
  "id": 4,
  "name": "new-plugin-ping-test",
  "type": "DockerJob",
  "image": "kecorbin/collins-ping",
  "latest": null,
  "last_result": "Fail",
  "environment": {
    "id": 1,
    "name": "testing",
    "description": "fdsf",
    "json": {
      "TARGET": "192.168.10.254"
    }
  },
  "enabled": true,
  "interval": {
    "id": 2,
    "every": 15,
    "period": "seconds"
  },
  "queue": "SITE_1"
}

module.exports = function(app) {
  app.get('/api/v1/jobs/2', function(req, res){
    res.send(job2);
  });
  app.get('/api/v1/jobs/3', function(req, res){
    res.send(job3);
  });
  app.get('/api/v1/jobs/4', function(req, res){
    res.send(job4);
  });
  app.get('/api/v1/jobs', function(req, res) {
    res.send([job2, job3, job4]);
  });
};
