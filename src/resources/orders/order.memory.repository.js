import Order from './order.model.js';

const Orders = [
  new Order({ clientId: '1', productList: [], isDelivered: false}),
  new Order({ clientId: '51397140-ebd5-49ab-9b06-b3b03faadc21', productList: [], isDelivered: false}),
];

const getAll = async () => Orders;

const getOrderById = async (id) => Orders.find((order) => id === order.id);

const createOrder = async ({ id, clientId, productList, isDelivered }) => {
  const order = new Order({ id, clientId, productList, isDelivered });
  Orders.push(order);
  return order;
};

const deleteById = async (orderId) => {
  const orderPosition = Orders.findIndex((order) => orderId === order.id);

  if (orderPosition === -1) return null;

  Orders.splice(orderPosition, 1);
};

const updateById = async ({ id, clientId, productList, isDelivered }) => {
  const orderPosition = Orders.findIndex((order) => id === order.id);

  if (orderPosition === -1) return null;

  const oldOrder = Orders[orderPosition];
  const newOrder = { ...oldOrder, clientId, productList, isDelivered };

  Orders.splice(orderPosition, 1, newOrder);
};

export {
  Orders,
  getAll,
  getOrderById,
  createOrder,
  deleteById,
  updateById,
};