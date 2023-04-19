import { Router } from 'express';

import Product from './product.model.js';
import * as productsService from './product.service.js';

import catchErrors from '../../common/catchErrors.js';
import { StatusCodes } from "http-status-codes"

const router = Router();

router.route('/').get(
  catchErrors(async (req, res) => {
    const products = await productsService.getAll();

    res.json(products.map(Product.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, title, price, description, count } = req.body;

    const product = await productsService.createProduct({ id, title, price, description, count });

    if (product) {
      res.status(StatusCodes.CREATED).json(Product.toResponse(product));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'PRODUCT_NOT_CREATE', msg: 'Product not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const product = await productsService.getProductById(id);

    if (product) {
      res.json(Product.toResponse(product));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PRODUCT_NOT_FOUND', msg: 'Product not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, price, description, count } = req.body;

    const product = await productsService.updateById({ id, title, price, description, count });

    if (product) {
      res.status(StatusCodes.OK).json(Product.toResponse(product));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PRODUCT_NOT_FOUND', msg: 'Product not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const product = await productsService.deleteById(id);

    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PRODUCT_NOT_FOUND', msg: 'Product not found' });
    }

    return res
      .status(StatusCodes.OK)
      .json({ code: 'PRODUCT_DELETED', msg: 'The product has been deleted' });
  })
);

export default router;

