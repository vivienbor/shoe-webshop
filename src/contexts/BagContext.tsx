import { createContext, useState } from "react";
import type { Bag } from "../types/Bag.type";
import type { BagItem } from "../types/BagItem.type";

export type BagContextType = {
  bag: Bag;
  addShoeToBag(newItem: BagItem): void;
  increaseShoeQuantity(clickedItem: BagItem): void;
  decreaseShoeQuantity(clickedItem: BagItem): void;
  removeItem(clickedItem: BagItem): void;
  emptyBag(): void;
};

export const BagContext = createContext<BagContextType | undefined>(undefined);

export type BagContextProviderProps = {
  children: React.ReactNode;
};

export function BagContextProvider(props: BagContextProviderProps) {
  const { children } = props;
  const [bag, setBag] = useState<Bag>({ items: [], sum: 0 });

  function addShoeToBag(newItem: BagItem) {
    if (
      bag.items.find(
        (item) => item.shoe === newItem.shoe && item.size === newItem.size
      )
    ) {
      const newItems = bag.items.map((item) => {
        if (
          bag.items.find(
            (item) => item.shoe === newItem.shoe && item.size === newItem.size
          )
        ) {
          const newQuantityItem: BagItem = {
            shoe: item.shoe,
            size: item.size,
            quantity: item.quantity + 1,
          };
          return newQuantityItem;
        } else {
          return item;
        }
      });
      setBag({ items: newItems, sum: bag.sum + newItem.shoe.price });
    } else {
      const newItems = [...bag.items, newItem];
      setBag({ items: newItems, sum: bag.sum + newItem.shoe.price });
    }
  }

  function increaseShoeQuantity(clickedItem: BagItem) {
    const newBagItems: BagItem[] = bag.items.map((item) => {
      if (item === clickedItem) {
        return {
          shoe: item.shoe,
          size: item.size,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setBag({ items: newBagItems, sum: bag.sum + clickedItem.shoe.price });
  }

  function decreaseShoeQuantity(clickedItem: BagItem) {
    const newBagItems: BagItem[] = bag.items.map((item) => {
      if (item === clickedItem) {
        return {
          shoe: item.shoe,
          size: item.size,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setBag({ items: newBagItems, sum: bag.sum - clickedItem.shoe.price });
  }

  function removeItem(clickedItem: BagItem) {
    const newBagItems: BagItem[] = bag.items.filter((item) => {
      return item != clickedItem;
    });
    setBag({ items: newBagItems, sum: bag.sum - clickedItem.shoe.price });
  }

  function emptyBag() {
    setBag({ items: [], sum: 0 });
  }

  return (
    <BagContext.Provider
      value={{
        bag,
        addShoeToBag,
        increaseShoeQuantity,
        decreaseShoeQuantity,
        removeItem,
        emptyBag,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}
