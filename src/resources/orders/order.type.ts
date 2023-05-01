export interface TOrder {
  clientId: string;
  productList: string[];
  isDelivered: boolean;
}

export interface TOrderModel extends TOrder {
  id: string;
}

export interface TOrderResponse extends TOrder {
  id: string;
}