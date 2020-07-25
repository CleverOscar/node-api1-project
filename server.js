/* simple server function */
//const http = require('http');

const express = require('express')

const port = 5000;

const server = express()

// const server = http.createServer((req,res) => {
//     //callback information
//     res.statusCode = 200;
//     res.setHeader("Content-Type", 'text/plain');
//     res.end('Hello World, from NodeJs')
// });

// request handler with middleware
server.get('/', (req, res) => {
  res.send('Hello World, from express!')
})

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})

//node index.js to execute
