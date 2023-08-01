class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateID() {
      return this.products.length + 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some(p => p.code === product.code)) {
        console.error("El código del producto ya existe.");
        return;
      }
  
      product.id = this.generateID();
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado.");
      }
    }
  }

  module.exports = ProductManager;