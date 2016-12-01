import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  firstname: {type: String, trim: true, required: true},
  lastname: {type: String, trim: true, required: true},
  email: {type: String, trim: true, required: true, unique: true,},
  active: {type: Boolean, defaut: true}
})

module.exports = mongoose.model('users', schema)