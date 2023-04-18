import * as usersRepo from './user.memory.repository.js';
import * as ordersRepo from '../orders/order.memory.repository.js';
const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getUserById(id);
const createUser = async ({ id, firstName, lastName, login, password, phoneNumber }) => {
  const user = usersRepo.createUser({ id, firstName, lastName, login, password, phoneNumber });
  return user;
}

const getUserOrders = (id) => {
  return ordersRepo.getAll().then((ordersPromise) => {
    const orders = ordersPromise;
    let filtOrder = [];
    for (let orderObj of orders) {
      if (orderObj.clientId === id) {
        filtOrder.push(orderObj)
      } 
    }
    return filtOrder;
  });
}


const deleteById = async (userId) => {
  getUserOrders(userId)
  .then((filtOrder) => {
    for(let order of filtOrder) {
    ordersRepo.deleteById(order.id); }
  })
  .catch((error) => {
    console.error(error);
  });
  
  usersRepo.deleteById(userId);
}
const updateById = ({ id, firstName, lastName, login, password, phoneNumber }) => {
  usersRepo.updateById({ id, firstName, lastName, login, phoneNumber });
}



export { 
  getAll,
  getById,
  createUser,
  deleteById,
  updateById,
  getUserOrders
};
