// load the express module
let express = require('express');

// initialize the express app.
let app = express();

// create an http server
// let server = require('http').createServer(app);

// where to find static files to serve to the browser
let staticFileRootFolder = './public';

// built-in express static file functionality
app.use(express.static(staticFileRootFolder));

// set the local port
const port = 3000;

// listen on port
app.listen(port, () => {
  console.log('Server running on ' + port + '...');
});