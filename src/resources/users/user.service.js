import * as usersRepo from './user.memory.repository.js';
import * as ordersRepo from '../orders/order.memory.repository.js';
const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getUserById(id);
const createUser = ({ id, firstName, lastName, login, password, phoneNumber }) => {
  usersRepo.createUser({ id, firstName, lastName, login, password, phoneNumber });
}
const deleteById = async (id) => {
  for(let order of ordersRepo.Orders){
    ordersRepo.deleteById(order.id, id);
  }
  usersRepo.deleteById(id);
}
const updateById = ({ id, firstName, lastName, login, password, phoneNumber }) => {
  usersRepo.updateById({ id, firstName, lastName, login, phoneNumber });
}

const getUserOrders = (id) => {
    return ordersRepo.getAll.filter(order => order.clientId === id);
 }

export { 
  getAll,
  getById,
  createUser,
  deleteById,
  updateById,
  getUserOrders
};