class ProductManager {
    constructor(products = []){
        this.products = products
        this.nextId = 1
    }
addProduct(product) {
    if(!product.title || !product.description ||
         !product.price || !product.thumbnail || 
         !product.code || !product.stock){
         console.error('Todos los campos son requeridos');
         return;
         }
    if(this.products.some(p=> p.code === product.code)){
        console.error('Un producto con el mismo código ya existe');
        return;
    }
    product.id = this.nextId++;
    this.products.push(product);
    }
    getProducts(){
        return this.products;
    }
    getProductsById(id){
        const product = this.products.find(p=> p.id === id)
        if(!product){
            console.error('Producto no encontrado')
        }
        return product
    }
}

const pm = new ProductManager();

pm.addProduct({
    title: 'Cheesecake',
    description: 'Torta de queso con frutos rojos',
    price: 4000,
    thumbnail: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2015%2F02%2F11%2Fcheesecake-facil-con-leche-condensada-2000.jpg',
    code: 'PROD1',
    stock: 4
})
pm.addProduct({
    title: 'Torta Oreo',
    description: 'Torta chocolate y mousse a base de galletas oreo',
    price: 5000,
    thumbnail: 'https://pasteleriadc.com/wp-content/uploads/torta-dripcake-helado-768x1078.jpg',
    code: 'PROD2',
    stock: 2
})
pm.addProduct({
    title: 'Lemon Pie',
    description: 'Pastel de mousse de limon con merengue',
    price: 4500,
    thumbnail: 'https://img2.rtve.es/i/?w=1600&i=1635859279860.jpg',
    code: 'PROD3',
    stock: 3
})

const products = pm.getProducts()
console.log(products)

const product = pm.getProductsById(1)
console.log(product)

const nonExistentProduct = pm.getProductsById(100)
console.log(nonExistentProduct)