// load the express module
let express = require('express');
// initialize the express app.
let app = express();
// where to find static files to serve to the browser
let staticFileRootFolder = './public';
// set the local port
const port = 3000;

// built-in express static file functionality
app.use(express.static(staticFileRootFolder));

// listen on port
app.listen(port, () => {
  console.log('Server running on ' + port + '...');
});