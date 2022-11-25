const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {    
    const { name, brand, price } = req.body

    const product = new ProductsModel({ name, brand, price })

    product.save()

    res.send({
        message: 'created successfully',
        product,
    })
}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'updated successfully',
        product,
    })
}

async function remove(req, res) {
    const { id } = req.params

    const product = await ProductsModel.deleteOne({ _id: id })

    const message = product.deletedCount > 0 
        ? 'removed successfully' 
        : 'error'

    res.send({
        message,
    })
}

module.exports ={
    get,
    post,
    put,
    remove,
}