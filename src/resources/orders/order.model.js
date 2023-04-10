import { v4 as uuidv4 } from 'uuid';

class Order {
  constructor({ id = uuidv4(), firstName = 'USER', lastName = 'LASTNAME' login = 'user', password = 'P@55w0rd', phoneNumber = '80294547812' } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }

  static toResponse(order) {
    const { id, firstName, lastName, login, phoneNumber } = order;
    return { id, firstName, lastName, login, phoneNumber };
  }
}

export default Order;
