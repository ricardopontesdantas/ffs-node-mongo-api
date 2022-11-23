const router = require('express').Router()

router.get('/api/customers', function(req, res) {
    res.send({ message: 'it works' })
})

module.exports = router