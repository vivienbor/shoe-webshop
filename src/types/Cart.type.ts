import type { CartItem } from "./CartItem.type";

export type Cart = {
  items: CartItem[];
  sum: number;
};
