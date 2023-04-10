import Product from './product.model';

const Products = [
  new Product({title: 'Nigger', price: 1, description: 'black', count: 5}),
  new Product({title: 'Aegis BOOST LE', price: 100, description: 'white', count: 1}),
];

const getAll = async () => Products;

const getProductById = async (id) => Products.find((product) => id === product.id);

const createProduct = async ({id, title, price, description, count}) => {
  const product = new Product({id, title, price, description, count});
  Products.push(product);
  return product;
};

const deleteById = async (id) => {
  const productPosition = Products.findIndex((product) => id === product.id);

  if (productPosition === -1) return null;

  Products.splice(productPosition, 1);
};

const updateById = async ({id, title, price, description, count}) => {
  const productPosition = Products.findIndex((product) => id === product.id);

  if (productPosition === -1) return null;

  const oldProduct = Products[productPosition];
  const newProduct = { ...oldProduct, title, price, description, count };

  Users.splice(productPosition, 1, newProduct);
};

export {
  Products,
  getAll,
  getProductById,
  createProduct,
  deleteById,
  updateById,
};
