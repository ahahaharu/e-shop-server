export interface TProduct {
  title: string;
  price: number;
  description: string;
  count: number;
}

export interface TProductModel extends TProduct {
  id: string;
}

export interface TProductResponse extends TProduct {
  id: string;
}
