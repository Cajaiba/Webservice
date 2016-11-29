import {Router as router} from 'express'

const router = Router()

router 
  .router('/users')
  .get(listeUsers)


function listeUsers(req, res) {
  const users = [
    {name: 'Eduardo'},
    {name: 'Cajaiba'},
  ]
  res.json(users)
}