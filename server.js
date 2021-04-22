const express = require('express');

cponst app = express();

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/test', (req, res) => {
  res.send('test')
})

app.get('/html', (req, res) => {
  res.send(`<div>
  <h1>HELLO</h1>
  <p>test paragraph</p>
  </div>`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT)