const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const thingRoutes = require('./routers/things')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/things', thingRoutes)

app.get('/', (req, res) => {
    res.send({
      message: "welcome",
      description: "THINGS API",
      endpoints: [
        "GET    /             200",
        "GET    /things       200",
        "GET    /things/:id   200",
        "POST   /things       201",
        "PATCH  /things/:id   200",
        "DELETE /things/:id   204",
      ]
    })
  })

module.exports = app