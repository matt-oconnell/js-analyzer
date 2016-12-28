var express = require('express')
var app = express()
var code_start = require(__dirname + '/code');
var cmd = require('node-cmd');

app.get('/', function (req, res) {
  cmd.get(`node --expose-debug-as=Debug jslogger.js --jsondump=true --code="${code_start}"`,
  function(ret) {
    res.send(ret);
  });
})

app.get('/code', function (req, res) {
  const code = req.query.code;
  cmd.get(`node --expose-debug-as=Debug jslogger.js --jsondump=true --code="${code}"`,
  function(ret) {
    res.send(ret);
  });
})

app.listen(3000, function () {
  console.log('JS ANALYZER on :3000!')
})
