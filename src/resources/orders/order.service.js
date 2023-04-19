import * as ordersRepo from './order.memory.repository.js';
import * as usersRepo from '../users/user.memory.repository.js';

const getAll = () => ordersRepo.getAll();
const getById = (id) => ordersRepo.getOrderById(id);
const createOrder = ({ id, clientId, productList, isDelivered }) => {
  const order = ordersRepo.createOrder({ id, clientId, productList, isDelivered });
  return order;
}
const deleteById = async (orderId) => {
  const order = ordersRepo.deleteById(orderId);
  return order;
}
const updateById = ({ id, clientId, productList, isDelivered }) => {
  const order = ordersRepo.updateById({ id, clientId, productList, isDelivered });
  return order;
}
export { 
  getAll,
  getById,
  createOrder,
  deleteById,
  updateById
};