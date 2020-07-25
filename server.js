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


//request hobbits page

server.get('/hobbit', (req, res)=>{
  const hobbits = [
    {
      id: 1,
      name: 'Oscar Ortiz'
    },
    {
      id: 2,
      name: 'Andrew Heredia'
    }
  ];

  res.status(200).json(hobbits)
})

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})

//node index.js to execute
