const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const phoneRoutes = require('./routers/phones')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/phones', phoneRoutes)

app.get('/', (req, res) => {
    res.send({
      message: "welcome",
      description: "PHONES API",
      endpoints: [
        "GET    /             200",
        "GET    /phones       200",
        "GET    /phones/:id   200",
        "POST   /phones       201",
        "PATCH  /phones/:id   200",
        "DELETE /phones/:id   204",
      ]
    })
  })

module.exports = app