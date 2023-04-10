import { Router } from 'express';

import Product from './product.model.js';
import * as productsService from './product.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await productsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Product.toResponse));
});

export default router;
