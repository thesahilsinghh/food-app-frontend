export interface CartItem {
    _id: string;
    menu_id: string;
    quantity: number;
    price: number;
    image: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "_id" | "createdAt" | "updatedAt">) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}