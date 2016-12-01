import {isValid as isValidId} from 'valid-objectid'

module.exports = {
  id,
}

function id(req, res, next, value) {
  if (!isValidId(value)) {
    const message = 'invalid id'
    return res
      .status(400)
      .json({message})
  }

  next()
}