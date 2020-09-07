const express = require('express')

const port = 5000;
const server = express();

server.use(express.json());

server.get('/', (req, res)=>{
  res.send('ROOT FILE')
})

server.listen(port, ()=> {
  console.log(`Server listening on port ${port}`)
})
