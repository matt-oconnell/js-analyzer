const express = require('express')
const app = express()
const code_example = require(__dirname + '/code');
const cmd = require('node-cmd');

app.get('/', function (req, res) {
  cmd.get(`node --expose-debug-as=Debug jslogger.js --jsondump=true --code="${code_example}"`,
  function(ret) {
    res.send(ret);
  });
})

app.get('/analyze', function (req, res) {
  const code = req.query.code;
  cmd.get(`node --expose-debug-as=Debug jslogger.js --jsondump=true --code="${code}"`,
  function(ret) {
    res.send(ret);
  });
})

app.listen(3000, function () {
  console.log('JS ANALYZER on :3000!')
})
