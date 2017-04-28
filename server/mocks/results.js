function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeResult(resultId, jobId=null) {
  var results = ["Failed", "Passed"];
  var index = getRandomIntInclusive(0, 1);

  if (jobId == null) {
    jobId = getRandomIntInclusive(2, 4);
  }

  return {
    "id": resultId,
    "jobId": jobId,
    "result": results[index],
    "json": null,
    "pluginHTMLResponse": "<h1>I Failed</h1>",
    "pluginRawResponse": null,
  }
}

module.exports = function(app) {
  app.get('/api/v1/results', function(req, res) {
    res.send([
      makeResult(getRandomIntInclusive(0, 1000)),
      makeResult(getRandomIntInclusive(0, 1000)),
      makeResult(getRandomIntInclusive(0, 1000))
    ]);
  })
  app.get('/api/v1/results/:id', function(req, res) {
    var resultId = parseInt(req.params['id'], 10);
    res.send(makeResult(resultId));
  });
  app.get('/api/v1/jobs/:jobId/results', function(req, res) {
    var jobId = parseInt(req.params['jobId'], 10);
    res.send([
      makeResult(getRandomIntInclusive(0, 1000), jobId),
      makeResult(getRandomIntInclusive(0, 1000), jobId),
      makeResult(getRandomIntInclusive(0, 1000), jobId),
      makeResult(getRandomIntInclusive(0, 1000), jobId),
      makeResult(getRandomIntInclusive(0, 1000), jobId),
      makeResult(getRandomIntInclusive(0, 1000), jobId)
    ])
  })
};
