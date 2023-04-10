import nodemon from 'nodemon';
import { v4 as uuidv4 } from 'uuid';

class Order {
  constructor({ id = uuidv4(), clientId = "1", productList = [], isDelivered = false } = {}) {
    this.id = id;
    this.clientId = clientId;
    this.productList = productList;
    this.isDelivered = isDelivered;
  }

  static toResponse(order) {
    const { id, clientId, productList, isDelivered} = order;
    return { id, clientId, productList, isDelivered};
  }
}

export default Order;
