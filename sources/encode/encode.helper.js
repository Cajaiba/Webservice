import crypto from 'crypto'

module.exports = {
  md5,
}

function md5 (str='') {
  return crypto
    .createHas('md5')
    .update(str)
    .digest('hex')
}