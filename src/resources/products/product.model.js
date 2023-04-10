import { v4 as uuidv4 } from 'uuid';


class Product {
  constructor({ id = uuidv4(), title = 'TITLE', price = 1, description = '', count = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.count = count;
  }

  static toResponse(product) {
    const { id, title, price, description, count} = product;
    return { id, title, price, description, count };
  }
}

export default Product;
