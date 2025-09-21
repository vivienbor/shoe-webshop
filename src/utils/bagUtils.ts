import type { BagItem } from "../types/BagItem.type";

export const calculateTotalQuantity = (bagItems: BagItem[]) => {
  let result = 0;

  bagItems.forEach((bagItem) => (result += bagItem.quantity));

  return result;
};
