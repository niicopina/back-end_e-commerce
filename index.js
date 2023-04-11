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
    thumbnail: '',
    code: 'PROD1',
    stock: 4
})
pm.addProduct({
    title: 'Torta Oreo',
    description: 'Torta chocolate y mousse a base de galletas oreo',
    price: 5000,
    thumbnail: '',
    code: 'PROD2',
    stock: 4
})