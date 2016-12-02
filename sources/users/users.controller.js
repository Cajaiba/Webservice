import Users from './users.model.js'
import encode from '../encode/encode.helper.js'
import jwt from 'jsonwebtoken'


module.exports = {
  list,
  get,
  create,
  disable,
  authenticate,
}

function list(req, res) {
  Users
    .find({active: {$ne: false}}, '-password -__v')
    .then(users => res.json(users))
}

function get(req, res) {
  Users
    .findById(req.params.id, privateFields)
    .then(users => res.json(users))
} 

function create(req, res) {
  const user = Users(req.body)

  user
    .save()
    .then(() => res.status(201).json({message: 'create'}))
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

function disable(req, res) {
  Users
    .findByIdAndUpdate(req.params.id, {$set: {active: false}})
    .then(() => res.json({message: 'disable'}))
}

function authenticate(req, res) {
  const email = req.body.email
  const password = encode.md5(req.body.password)
  const active = true

  Users
    .findOne({email, password, active})
    .then(generateToken)

    function generateToken(user) {
      if(!user) {
        return res
          .status(401)
          .json({message: 'invalid credentials'})
      }

      const id = user.id
      const token = jwt.sing({id,email}, 'secret')
      res.json({token})
    }
}