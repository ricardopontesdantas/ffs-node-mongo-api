const mongoose = require('mongoose')

connect().catch(error => console.log(error))

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/ffs-api-restful?readPreference=primary&ssl=false&directConnection=true')
}

module.exports = {
    connect,
}