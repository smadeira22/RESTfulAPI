const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', (req, res) => {
    res.send({
      message: "welcome",
      description: "THINGS API",
      endpoints: [
        "GET    /               200"
      ]
    })
  })

module.exports = app