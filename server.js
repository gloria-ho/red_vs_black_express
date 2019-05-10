// load the requirements
const express = require('express');
const report = require('./db/report');
const bodyParser = require('body-parser');


// initialize the express app.
const app = express();
// where to find static files to serve to the browser
let staticFileRootFolder = './public';
// set the local port
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// built-in express static file functionality
app.use(express.static(staticFileRootFolder));
// allow posting of json in the body
app.use(bodyParser.json());

// add user impression to global counter
app.post('/addImpression', function(req, res, next) {
  let color = req.body.color;
  let ip = req.ip
  report.addImpression(ip, color);
});

// show global report data
app.get('/data', function(req, res, next) {
  let data = report.getReport();
  res.json(data);
});

// listen on port
app.listen(port, () => {
  console.log('Server running on ' + port + '...');

});