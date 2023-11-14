const Thing = require('../models/Thing')

const index = (req, res) => {
    const things = Thing.getAll()
    res.status(200).send({ data: things })
}

const show = (req, res) => {
   try {
      const thingId = parseInt(req.params.id)
      const thing = Thing.findById(thingId)
      res.status(200).send({ data: thing })
   } catch (err){
      res.status(404).send({ error: err.message })
   }
}

const create = (req, res) => {
   try {
      const data = req.body
      const newThing = Thing.create(data)
      res.status(201).send({ data: newThing })
   } catch(err) {
      res.status(400).send({ error: err.message })
   }
}
module.exports = { index, show, create }