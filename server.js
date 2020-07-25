const express = require('express')

const port = 5000;
const server = express();

server.use(express.json());

server.get('/', (req, res)=>{
  res.send('ROOT FILE')
})

server.get('/hobbits', (req, res) => {
  res.send('Welcome to Hobbiton');
})

server.post('/hobbits', (req, res) => {
  res.status(201).json({
    url: '/hobbits',
    operation: 'POST'
  })
})

server.put('/hobbits', (req, res) => {
  res.status(200).json({
    url: '/hobbits',
    operation: 'PUT'
  })
})

server.delete('hobbits', (req, res) => {
  res.status(204);
})

server.listen(port, ()=> {
  console.log(`Server listening on port ${port}`)
})
