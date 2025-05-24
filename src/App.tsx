import { useState } from "react";
import { initialShoes } from "./initialShoes";
import type { Shoe } from "./types/Shoe.type";
import ShoeComponent from "./components/ShoeComponent";
import type { Cart } from "./types/Cart.type";
import type { CartItem } from "./types/CartItem.type";
import CartComponent from "./components/CartComponent";

function App() {
  const [shoes, setShoes] = useState<Shoe[]>(initialShoes);
  const [cart, setCart] = useState<Cart>({ items: [], sum: 0 });

  function addShoeToCart(newShoe: Shoe) {
    const foundShoe = cart.items.find(
      (item) => item.shoe.name === newShoe.name
    );

    if (foundShoe) {
      const newItems: CartItem[] = cart.items.map((item) => {
        if (newShoe.name === item.shoe.name) {
          return {
            shoe: foundShoe.shoe,
            quantity: foundShoe.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setCart({ items: newItems, sum: cart.sum + newShoe.price });
    } else {
      const newItems: CartItem[] = [
        ...cart.items,
        { shoe: newShoe, quantity: 1 },
      ];
      setCart({ items: newItems, sum: cart.sum + newShoe.price });
    }
  }

  function handleFavourite(selectedShoe: Shoe) {
    const newShoes: Shoe[] = shoes.map((shoe) => {
      if (selectedShoe.name === shoe.name) {
        return {
          ...shoe,
          isFav: !selectedShoe.isFav,
        };
      } else {
        return shoe;
      }
    });
    setShoes(newShoes);
  }

  return (
    <>
      {shoes.map((shoe) => (
        <ShoeComponent
          shoe={shoe}
          addShoeToCart={addShoeToCart}
          handleFavourite={handleFavourite}
        />
      ))}
      <CartComponent cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
