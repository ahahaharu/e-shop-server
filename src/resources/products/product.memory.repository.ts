import Product from './product.model';
import { TProductModel } from './product.type'

const Products: (TProductModel | undefined)[] = [
  new Product({ title: 'Nigger', price: 1, description: 'black', count: 5 }),
  new Product({ title: 'Aegis BOOST LE', price: 100, description: 'white', count: 1 }),
];

const getAll = async (): Promise<(TProductModel | undefined)[]> => Products;

const getProductById = async (id: string): Promise<(TProductModel | undefined)> => Products.find((product) => id === product?.id);

const createProduct = async ({ id, title, price, description, count }: TProductModel): Promise<TProductModel> => {
  const product = new Product({ id, title, price, description, count });
  Products.push(product);
  return product;
};

const deleteById = async (id: string): Promise<(TProductModel | undefined)> => {
  const productPosition = Products.findIndex((product) => id === product?.id);

  if (productPosition === -1) return undefined;

  const product = getProductById(id);

  Products.splice(productPosition, 1);
  return product;
};

const updateById = async ({ id, title, price, description, count }: TProductModel): Promise<(TProductModel | undefined)> => {
  const productPosition = Products.findIndex((product) => id === product?.id);

  if (productPosition === -1) return undefined;

  const oldProduct = Products[productPosition];
  const newProduct = { ...oldProduct, id, title, price, description, count };

  Products.splice(productPosition, 1, newProduct);
  return newProduct;
};

export {
  Products,
  getAll,
  getProductById,
  createProduct,
  deleteById,
  updateById,
};
