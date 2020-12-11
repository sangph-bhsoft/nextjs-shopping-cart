export interface ModalState {
  isOpen: boolean;
  title: string;
}

export interface Product {
  id: number;
  name: string;
  imageUrl1: string;
  imageUrl2: string;
  price: number;
  promotion: number;
  description: string;
}

export interface ProductListState {
  list: Product[];
  page: number;
  loading: boolean;
  error: string;
  hasMore: boolean;
}

export interface ProductState {
  obj: Product;
}

export interface AppState {
  modal: ModalState;
  productList: ProductListState;
  product: ProductState;
  cart: CartState;
}

export interface CartAdd {
  product: Product;
  quantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  carts: CartItem[];
}
