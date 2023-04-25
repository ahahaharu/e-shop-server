import * as usersRepo from './user.memory.repository.js';
import * as ordersRepo from '../orders/order.memory.repository.js';
import { TUserModel } from './user.type.js';

/**
 * Get all users
 * @returns {Promise<TUserModel[]>} - array of users
 */
const getAll = async (): Promise<(TUserModel | undefined)[]> => usersRepo.getAll();

/**
 * User return by id
 * @param id - id user
 * @returns {Promise<?TUserModel>} - return user object or null
 */
const getById = async (id: string): Promise<TUserModel | undefined> => usersRepo.getUserById(id);

/**
 * Create users
 * @param {TUserModel} - new user parameters
 * @returns {Promise<TUserModel>} - return new user object
 */
const createUser = async ({ id, firstName, lastName, login, password, phoneNumber }:TUserModel): Promise<TUserModel> => {
  const user = usersRepo.createUser({ id, firstName, lastName, login, password, phoneNumber });
  return user;
}


/**
 * Get all User's orders
 * @param id - user id
 *  */ 
const getUserOrders = (id: string):Promise<(TUserModel | undefined)[]> => {
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

/**
 * Delete user; Removing users tasks
 * @param userId - user id
 * @returns {Promise<?TUserModel>} - return user object or null
 */
const deleteById = async (userId: string): Promise<TUserModel | undefined> => {
  getUserOrders(userId)
  .then((filtOrder) => {
    for(let order of filtOrder) {
      ordersRepo.deleteById(order?.id);
    }
  })
  .catch((error) => {
    console.error(error);
  });

  usersRepo.deleteById(userId);
  
  return undefined;
}

/**
 * Update user by id
 * @param {TUserModel} user - params for user update
 * @returns {Promise<?TUserModel>} - return user object or null
 */
const updateById = ({ id, firstName, lastName, login, password, phoneNumber }: TUserModel): Promise<TUserModel | undefined> => {
  return usersRepo.updateById({ id, firstName, lastName, login, password, phoneNumber });
}



export { 
  getAll,
  getById,
  createUser,
  deleteById,
  updateById,
  getUserOrders
};
