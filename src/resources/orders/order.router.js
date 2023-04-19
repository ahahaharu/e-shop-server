import { Router } from 'express';

import Order from './order.model.js';
import * as ordersService from './order.service.js';

import catchErrors from '../../common/catchErrors.js';
import { StatusCodes } from "http-status-codes"

const router = Router();

router.route('/').get(
  catchErrors(async (req, res) => {
    const orders = await ordersService.getAll();

    res.json(orders.map(Order.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, clientId, productList, isDelivered} = req.body;

    const order = await ordersService.createOrder({ id, clientId, productList, isDelivered});

    if (order) {
      res.status(StatusCodes.CREATED).json(Order.toResponse(order));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'ORDER_NOT_CREATE', msg: 'Order not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const order = await ordersService.getById(id);

    if (order) {
      res.json(Order.toResponse(order));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'ORDER_NOT_FOUND', msg: 'Order not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { clientId, productList, isDelivered} = req.body;

    const order = await ordersService.updateById({ id, clientId, productList, isDelivered});

    if (order) {
      res.status(StatusCodes.OK).json(Order.toResponse(order));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'ORDER_NOT_FOUND', msg: 'Order not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const order = await ordersService.deleteById(id);

    if (!order) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'ORDER_NOT_FOUND', msg: 'Order not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'ORDER_DELETED', msg: 'The order has been deleted' });
  })
);

export default router;