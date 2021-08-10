const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    created_on: { type: Date, default: Date.now },
})

const postmodel = mongoose.model('newsfeed', schema)




const signupschema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    Address: String,
    Age: String,
    MobileNumber: String,
    created_on: { type: Date, default: Date.now }
})


const signuppostmodel = mongoose.model('signup', signupschema)

module.exports = postmodel
module.exports = signuppostmodel



