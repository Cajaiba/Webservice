import Users from './users.model.js'

module.exports = {
  list,
}

function list(req, res) {
  Users.find({}, function(err, users) {
    res.json(users)  
  })
}