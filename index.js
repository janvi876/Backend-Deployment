const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
  })
  app.get('/login', (req, res) => {
    res.send('<h1>please login</h1>')
  })
    app.get('/register', (req, res) => {
        res.send('<h2>please register</h2>')
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})