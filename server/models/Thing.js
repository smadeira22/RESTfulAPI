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
    }catch(err){
      throw new Error(err)
    }
  }
}

module.exports = Thing