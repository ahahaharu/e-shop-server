import { Router } from 'express';

import Order from './order.model.js';
import * as ordersService from './order.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await ordersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Order.toResponse));
});

export default router;
