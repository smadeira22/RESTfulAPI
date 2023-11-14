const thingData = require('../data')

class Thing {
    constructor(data){
      this.id = data.id
      this.name = data.name
      this.brand = data.brand
      this.color = data.color
  }

  static getAll() {
    const things = thingData.map(v => new Thing(v))
    return things
  }

  static findById(thingId){
    try {
      const thingsData = thingData.find(v => v.id === thingId )
      const thing = new Thing(thingsData)
      return thing
    } catch(error) {
      throw new Error('This thing does not exist!')
    }
  }
}

module.exports = Thing