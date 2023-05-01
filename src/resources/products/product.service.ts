import { TProductModel } from './product.type';
import { TOrderModel } from '../orders/order.type';
import * as productsRepo from './product.memory.repository';
import * as ordersRepo from '../orders/order.memory.repository';

/**
 * Get all products
 * @returns {Promise<?TProductModel[]>} - array of products or undefined
 */
const getAll = (): Promise<(TProductModel | undefined)[]> => productsRepo.getAll();

/**
 * return Product by id
 * @param id - Product id
 * @returns {Promise<?TProductModel>} - return product object or undefined
 */
const getProductById = (id: string): Promise<(TProductModel | undefined)> => productsRepo.getProductById(id);

/**
 * Create a product object
 * @param {TProductModel} - new product parameters
 * @returns {Promise<?TProductModel>} - return new product object or undefined
 */
const createProduct = ({ id, title, price, description, count }: TProductModel): Promise<(TProductModel | undefined)> => productsRepo.createProduct({ id, title, price, description, count });

/**
 * Delete user; Removing users tasks
 * @param productId - product id
 * @returns {Promise<?TProductModel>} - return user object or undefined
 */
const deleteById = (productId: string): Promise<(TProductModel | undefined)> => {
  const product = productsRepo.deleteById(productId);
  return product;
}

/**
 * Update product by id
 * @param {TProductModel} product - params for product update
 * @returns {Promise<?ProductModel>} - return product object or undefined
 */
const updateById = ({ id, title, price, description, count }: TProductModel): Promise<(TProductModel | undefined)> => {
  const product = productsRepo.updateById({ id, title, price, description, count });
  return product;
}

/**
 * Returns all orders that includes the passing product id
 * @param productId - product id
 * @returns {Promise<(?TOrderModel)>[]} - return array of orders or undefined
 */
const getProductOrders = (productId: string): Promise<(TOrderModel | undefined)[]> => {
  return ordersRepo.getAll.filter((order: TOrderModel): boolean => order.productList.includes(productId));
}


export {
  getAll,
  getProductById,
  createProduct,
  deleteById,
  updateById,
  ordersRepo
};
