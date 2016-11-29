import {Router} from 'express'

const router = Router()

router 
  .router('/users')
  .get(listeUsers)

module.exports = router


function listeUsers(req, res) {
  const users = [
    {name: 'Eduardo'},
    {name: 'Cajaiba'},
  ]
  res.json(users)
}