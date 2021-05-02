
// Bring in the express server and create application
let express = require('express');
let app = express();

// use the express Router object
let router = express.Router();

let players = [
    { 'id': 18, 'name': 'Virat' },
    { 'id': 10, 'name': 'sachin' },
    { 'id': 07, 'name': 'Dhoni' }
]

// Create a GET to return a list of all.
router.get('/', function (req, res, next) {
    res.status(200).send(players);
})

// Configure a router so all the routes are prefixed with /api/v1
app.use('/api/', router); // All REST API's in this server a called as follows - http://localhost:3000/api/

// Create a server to listen on port 3000
var server = app.listen(3000, function () {
    console.log('server running on port 3000');
});