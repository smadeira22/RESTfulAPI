const phonesData = require('../data')

class Phone {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.brand = data.brand
    this.color = data.color
  }

  static getAll() {
    const phones = phonesData.map(v => new Phone(v))
    return phones
  }

  static findById(phoneId){
    try {
      const phoneData = phonesData.find(v => v.id === phoneId )
      const phone = new Phone(phoneData)
      return phone
    } catch(error) {
      throw new Error('This phone does not exist!')
    }
  }
  
  static create(data){
    if(!data.name) throw new Error('name is missing')
  
    try {
      let nextId
      phonesData.length
        ? nextId = phonesData.reduce((v1,v2) => v1.id > v2.id ? v1 : v2).id + 1 
        : nextId = 1

      const newPhone = new Phone({ id: nextId, name: data.name, brand: data.brand, color: data.color})
      phonesData.push(newPhone)
      return newPhone   
    } catch(err) {
      throw new Error(err)
    }
  }

  update(data) {
    try {
      const phoneData = phonesData.find(phone => phone.id === this.id)
 
      if (!phoneData) {
        throw new Error('phone was not found')
      } 
  
      if(!data.name) {
        throw new Error('name missing')
      }
  
      phoneData.name = data.name
      return new Phone(phoneData)
    } catch(error) {
      throw new Error(error.message)
    }
  }

  destroy(){
    const phoneData = phonesData.find(phone => phone.id === this.id)
    
    if(phoneData){
      const phonesIndex = phonesData.indexOf(phoneData)
      phonesData.splice(phonesIndex, 1)
    } else {
      throw new Error('Phone not found')
    }
  }
}

module.exports = Phone