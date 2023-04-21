const fs = require('fs')

class ProductManager {
    constructor(path){
        this.path = path
        this.nextId = 1
        if(!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify([]))
        }
    }
    addProduct(product){
        const products = this.getProductsFromFile()
        if(!product.title || !product.description || !product.price || !product.thumbnail
            || !product.code || !product.stock){
                return error('All camps are required')
            }
        if(products.some(p => p.code === product.code)){
            return error('A product with the same code already exist')
        }
        product.id = this.nextId++
        product.push(product)
        this.saveProductsToFile(products)
    }
    getProducts(){
        return this.getProductsFromFile()
    }
    getProductById(id){
        const products = this.getProductsFromFile()
        const product = products.findIdex(p => p.id === id)
        if(index === -1){
            return error('Product not found')
        }
        products[index] = {
            ...products[index],
            ...updatedProduct,
            id: id,
        }
        this.saveProductsToFile(products)
    }
    deleteProduct(id){
        const products = this.getProductsFromFile()
        const index = products.findIdex(p => p.id === id)
    }
}