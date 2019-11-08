const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

const encode = require('./app/routes/encode')


app.use(express.static(__dirname + '/app/'))
app.use(express.json())
app.get('*.*', (req,res) => res.sendFile(path.join(__dirname)));


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Api endpoint
app.post('/api/contact', encode);

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server started')
})