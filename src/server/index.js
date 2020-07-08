
var path = require('path')
const express = require('express')
const app = express();
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser')
var AYLIENTextAPI = require('aylien_textapi');
const requestPost=require('./request') ;


/* Middleware*/
// Here we are configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())


// Intialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/article', requestPost.validateInputRequest, requestPost.PostHandler);

module.exports = app;