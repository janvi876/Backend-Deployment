require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const githubData = {
    "timeline_url": "https://github.com/timeline",
    "user_url": "https://github.com/{user}",
    "current_user_public_url": "https://github.com/ayushsnha",
    "_links": {
      "timeline": {
        "href": "https://github.com/timeline",
        "type": "application/atom+xml"
      },
      "user": {
        "href": "https://github.com/{user}",
        "type": "application/atom+xml"
      },
      "current_user_public": {
        "href": "https://github.com/ayushsnha",
        "type": "application/atom+xml"
      }
    }
  }
    

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

  app.get('/github', (req, res) => {
    res.json(githubData)
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})