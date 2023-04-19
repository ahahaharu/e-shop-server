import { Router } from 'express';
import User from './user.model.js';
import * as usersService from './user.service.js';
import catchErrors from '../../common/catchErrors.js';
import { StatusCodes } from "http-status-codes"
import { getUserById } from './user.memory.repository.js';

const router = Router();

router.route('/').get(
  catchErrors(async (req, res) => {
    const users = await usersService.getAll();

    res.json(users.map(User.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, firstName, lastName, login, password, phoneNumber} = req.body;

    const user = await usersService.createUser({ id, firstName, lastName, login, password, phoneNumber});

    if (user) {
      res.status(StatusCodes.CREATED).json(User.toResponse(user));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'USER_NOT_CREATE', msg: 'User not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const user = await usersService.getById(id);

    if (user) {
      res.json(User.toResponse(user));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'USER_NOT_FOUND', msg: 'User not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, login, password, phoneNumber } = req.body;

    const user = await usersService.getById(id)
    if (!(user === undefined)){
      await usersService.updateById({ id, firstName, lastName, login, password, phoneNumber });
      res.status(StatusCodes.OK).json(await usersService.getById(id));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'USER_NOT_FOUND', msg: 'User not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getById(id)
    if (user === undefined) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'USER_NOT_FOUND', msg: 'User not found' });
    }
    await usersService.deleteById(id);
    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'USER_DELETED', msg: 'The user has been deleted' });
  })
);

export default router;
