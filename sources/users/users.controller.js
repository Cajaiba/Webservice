import Users from './users.model.js'

module.exports = {
  list,
  get,
  disable,
  create,
}

function list(req, res) {
  Users
    .find({active: {$ne: false}})
    .then(users => res.json(users))
}

function get(req, res) {
  Users
    .findById(req.params.id)
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