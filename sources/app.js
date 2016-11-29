import express from 'express'
import rounter from './router.js'

const server = express()
const port = process.env.PORT || 3000

server.use('/api', router)

server.listen(port, () => console.log(`localhost:${port}`))