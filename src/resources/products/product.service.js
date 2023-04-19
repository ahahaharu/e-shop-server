import * as productsRepo from './product.memory.repository.js';
import * as ordersRepo from '../orders/order.memory.repository.js';

const getAll = () => productsRepo.getAll();
const getProductById = (id) => productsRepo.getProductById(id);
const createProduct = ({id, title, price, description, count}) => productsRepo.createProduct({id, title, price, description, count});
const deleteById = (id) => {
  const product = productsRepo.deleteById(id);
  return product;
}
const updateById = (id) => {
  const product = productsRepo.updateById(id);
  return product;
}
const getProductOrders = (productId) => {
    return ordersRepo.getAll.filter(order => order.productList.includes(productId));
}


export { 
  getAll,
  getProductById,
  createProduct,
  deleteById,
  updateById,
  ordersRepo
 };
