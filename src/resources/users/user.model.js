import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({ id = uuidv4(), firstName = 'USER', lastName = 'LASTNAME', login = 'user', password = 'P@55w0rd', phoneNumber = '80294547812' } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }

  static toResponse(user) {
    const { id, firstName, lastName, login, phoneNumber } = user;
    return { id, firstName, lastName, login, phoneNumber };
  }
}

export default User;
