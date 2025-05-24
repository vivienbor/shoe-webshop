import type { Cart } from "../types/Cart.type";
import type { CartItem } from "../types/CartItem.type";
import CartItemComponent from "./CartItemComponent";

type Props = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

export default function CartComponent(props: Props) {
  const { cart, setCart } = props;

  function handleRemoveItemFromCart(selectedItem: CartItem) {
    if (selectedItem.quantity > 1) {
      const newItems: CartItem[] = cart.items.map((item) => {
        if (selectedItem.shoe.name === item.shoe.name) {
          return {
            shoe: selectedItem.shoe,
            quantity: selectedItem.quantity - 1,
          };
        } else {
          return item;
        }
      });
      setCart({ items: newItems, sum: cart.sum - selectedItem.shoe.price });
    } else {
      const newItems: CartItem[] = cart.items.filter(
        (item) => item.shoe.name != selectedItem.shoe.name
      );
      setCart({ items: newItems, sum: cart.sum - selectedItem.shoe.price });
    }
  }

  return (
    <>
      {cart.sum}
      {cart.items.map((item) => (
        <CartItemComponent
          item={item}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ))}
    </>
  );
}
