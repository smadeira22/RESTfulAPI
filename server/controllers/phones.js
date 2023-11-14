const Phone = require('../models/Phone')

const index = (req, res) => {
   const phones = Phone.getAll()
   res.status(200).send({ data: phones })
}

const show = (req, res) => {
   try {
      const phoneId = parseInt(req.params.id)
      const phone = Phone.findById(phoneId)
      res.status(200).send({ data: phone })
   } catch (err){
      res.status(404).send({ error: err.message })
   }
}

const create = (req, res) => {
   try {
      const data = req.body
      const newPhone = Phone.create(data)
      res.status(201).send({ data: newPhone })
   } catch(err) {
      res.status(400).send({ error: err.message })
   }
}

const update = (req,res) => {
   try {
      const { id } = req.params
      const phoneToUpdate = Phone.findById(parseInt(id))

      const updatedPhone = phoneToUpdate.update(req.body)
      res.status(200).send({ data: updatedPhone })
   } catch (err) {
      res.status(400).send({ error: err.message })
  }
}

const destroy = (req, res) => {
   try {
     const { id } = req.params
     const phoneToDelete = Phone.findById(parseInt(id))
   
     phoneToDelete.destroy()
     res.status(204).end()
   } catch (error) {
     res.status(404).send({ error: error.message})
   }
}


module.exports = { 
   index, show, create, update, destroy 
}