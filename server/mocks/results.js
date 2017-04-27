
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateJobJSON(id) {
  return [
    {
      "id": getRandomIntInclusive(1, 1000),
      "jobId": id,
      "result": "Passed",
      "json": null,
      "pluginHTMLResponse": "<h1>I always pass</h1>",
      "pluginRawResponse": null
    },
    {
      "id": getRandomIntInclusive(1, 1000),
      "jobId": id,
      "result": "Passed",
      "json": null,
      "pluginHTMLResponse": "<h1>I always pass</h1>",
      "pluginRawResponse": null,
    },
    {
      "id": getRandomIntInclusive(1, 1000),
      "jobId": id,
      "result": "Failed",
      "json": null,
      "pluginHTMLResponse": "<h1>I Failed</h1>",
      "pluginRawResponse": null,
    }
  ];
}

module.exports = function(app) {
  app.get('/api/v1/jobs/:jobId/results', function(req, res) {
    var jobId = parseInt(req.params['jobId'], 10);
    res.send(generateJobJSON(jobId));
  });
};
