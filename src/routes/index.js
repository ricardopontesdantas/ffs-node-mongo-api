const router = require('express').Router()

const ProductsController = require('../controllers/products')

router.get('/api/products', ProductsController.get)
// router.post('/api/products', ProductsController.post)
// router.put('/api/products/:id', ProductsController.put)
// router.delete('/api/products/:id', ProductsController.delete)

module.exports = router