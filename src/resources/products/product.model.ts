import { v4 as uuid } from 'uuid';
import { TProductModel, TProductResponse } from './product.type';


class Product {
  /**
   * Creates a product instance
   * @param {TProductModel} product - user Object
   */

  id: string;
  title: string;
  price: number;
  description: string;
  count: number

  constructor({ id = uuid(), title = 'TITLE', price = 1, description = '', count = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.count = count;
  }

  /**
   * Return static data for product
   * @param {TProductModel} product passing the product object
   * @returns {TProductResponse} Product parameters
   */
  static toResponse(product: TProductModel): TProductResponse {
    const { id, title, price, description, count } = product;
    return { id, title, price, description, count };
  }
}

export default Product;