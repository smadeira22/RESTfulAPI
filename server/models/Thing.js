const thingsData = require('../data')

class Thing {
    constructor(data){
      this.id = data.id
      this.name = data.name
      this.brand = data.brand
      this.color = data.color
  }

  static getAll() {
    const things = thingsData.map(v => new Thing(v))
    return things
  }

  static findById(thingId){
    try {
      const thingData = thingsData.find(v => v.id === thingId )
      const thing = new Thing(thingData)
      return thing
    } catch(error) {
      throw new Error('This thing does not exist!')
    }
  }
  
  static create(data){
    if(!data.name) throw new Error('name is missing')
  
    try {
      let nextId
      thingsData.length
        ? nextId = thingsData.reduce((v1,v2) => v1.id > v2.id ? v1 : v2).id + 1 
        : nextId = 1

      const newThing = new Thing({ id: nextId, name: data.name, brand: data.brand, color: data.color})
      thingsData.push(newThing)
      return newThing   
    } catch(err) {
      throw new Error(err)
    }
  }

  update(data) {
    try {
      const thingData = thingsData.find(thing => thing.id === this.id)
 
      if (!thingData) {
        throw new Error('thing was not found')
      } 
  
      if(!data.name) {
        throw new Error('name missing')
      }
  
      thingData.name = data.name
      return new Thing(thingData)
    } catch(error) {
      throw new Error(error.message)
    }
  }

  destroy(){
    const thingData = thingsData.find(thing => thing.id === this.id)
    
    if(thingData){
      const thingsIndex = thingsData.indexOf(thingData)
      thingsData.splice(thingsIndex, 1)
    } else {
      throw new Error('Thing not found')
    }
  }
}

module.exports = Thing