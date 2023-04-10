import * as ordersRepo from './order.memory.repository.js';
import * as usersRepo from '../users/user.memory.repository.js';

const getAll = () => ordersRepo.getAll();
const getById = (id) => ordersRepo.getOrderById(id);
const createOrder = ({ id, clientId, productList, isDelivered }) => {
  ordersRepo.createOrder({ id, clientId, productList, isDelivered });
}
const deleteById = async (userId, orderId) => {
  ordersRepo.deleteById(userId, orderId);
}
const updateById = ({ id, clientId, productList, isDelivered }) => {
  ordersRepo.updateById({ id, clientId, productList, isDelivered });
}
export { 
  getAll,
  getById,
  createOrder,
  deleteById,
  updateById
};