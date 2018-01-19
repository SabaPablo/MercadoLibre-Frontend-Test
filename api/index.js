const express = require('express')

const router = express.Router()

router.get('/item', (req, res) => res.send('Hello, Items!'))

module.exports = router
