const { Z_ASCII } = require('zlib')
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

const update = (req,res) => {
   try {
      const { id } = req.params
      const thingToUpdate = Thing.findById(parseInt(id))

      const updatedThing = thingToUpdate.update(req.body)
      res.status(200).send({ data: updatedThing })
   } catch (err) {
      res.status(400).send({ error: err.message })
  }
}

const destroy = (req, res) => {
   try {
     const { id } = req.params
     const thingToDelete = Thing.findById(parseInt(id))
   
     thingToDelete.destroy()
     res.status(204).end()
   } catch (error) {
     res.status(404).send({ error: error.message})
   }
}


module.exports = { 
   index, show, create, update, destroy 
}