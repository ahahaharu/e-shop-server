import * as ordersRepo from './order.memory.repository.js';

const getAll = () => ordersRepo.getAll();

export { getAll };
