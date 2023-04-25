import { v4 as uuidv4 } from 'uuid';
import { TUserModel, TUserResponse } from './user.type';

class User {
  /**
   * Creates a user instance
   * @param {TUserModel} user - user Object
   */

  id: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  phoneNumber: string;

  constructor({ id = uuidv4(), firstName = 'USER', lastName = 'LASTNAME', login = 'user', password = 'P@55w0rd', phoneNumber = '80294547812' } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }

  /**
   * Return static data for user
   * @param {TUserModel} user passing the user object
   * @returns {TUserResponse} User parameters
   */

  static toResponse(user: TUserModel): TUserResponse {
    const { id, firstName, lastName, login, phoneNumber } = user;
    return { id, firstName, lastName, login, phoneNumber };
  }
}

export default User;
