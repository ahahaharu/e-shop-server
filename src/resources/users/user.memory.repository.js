import User from './user.model.js';

const Users = [
  new User({ firstName: 'Marat', lastName: 'Pereverzev', login: 'maratik', password: 'Huo', phoneNumber: '+375444444444'}),
  new User({ firstName: 'Andrey', lastName: 'Bogdanovich', login: 'andrusha', password: 'ahahahaharu', phoneNumber: '+375333333333' }),
  new User({ firstName: 'Vanya', lastName: 'Moroz', login: 'vanusha', password: 'PhoeniXYZ', phoneNumber: '+3755555555' }),
  new User({ firstName: 'Egor', lastName: 'Dovnar', login: 'egorik', password: 'tomasShelby', phoneNumber: '+375222222222' })
];

const getAll = async () => Users;

const getUserById = async (id) => Users.find((user) => id === user.id);

const createUser = async ({ id, firstName, lastName, login, password, phoneNumber }) => {
  const user = new User({ id, firstName, lastName, login, password, phoneNumber });
  Users.push(user);
  return user;
};

const deleteById = async (id) => {
  const userPosition = Users.findIndex((user) => id === user.id);

  if (userPosition === -1) return null;

  Users.splice(userPosition, 1);
};

const updateById = async ({ id, firstName, lastName, login, password, phoneNumber }) => {
  const userPosition = Users.findIndex((user) => id === user.id);

  if (userPosition === -1) return null;

  const oldUser = Users[userPosition];
  const newUser = { ...oldUser, firstName, lastName, login, password, phoneNumber };

  Users.splice(userPosition, 1, newUser);
};

export {
  Users,
  getAll,
  getUserById,
  createUser,
  deleteById,
  updateById,
};
