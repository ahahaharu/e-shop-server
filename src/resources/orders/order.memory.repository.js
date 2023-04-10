import Order from './order.model';

const Orders = [
  new Order({ clientId: '1', productList: [], isDelivered = false}),
  new Order({ clientId: '2', productList: [], isDelivered = false}),
];

const getAll = async () => Orders;

const getOrderById = async (id) => Orders.find((order) => id === order.id);

const createOrder = async ({ id, clientId, productList, isDelivered }) => {
  const order = new Order({ id, clientId, productList, isDelivered });
  Orders.push(order);
  return order;
};

const deleteById = async (userId, orderId) => {
  const orderPosition = Orders.findIndex((order) => orderId === order.id && userId === order.clientId);

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