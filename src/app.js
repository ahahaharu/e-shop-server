import express from 'express';

import userRouter from './resources/users/user.router.js';
import productRouter from "./resources/products/product.router.js";
import orderRouter from "./resources/orders/order.router.js";

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
