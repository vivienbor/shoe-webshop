import { createContext, useState } from "react";
import type { Shoe } from "../types/Shoe.type";
import { initialShoes } from "../constants/initialShoes";

export type ShoesContextType = {
  shoes: Shoe[];
};

export const ShoesContext = createContext<ShoesContextType | undefined>(
  undefined
);

type ShoesContextProviderProps = {
  children: React.ReactNode;
};

export function ShoeContextProvider(props: ShoesContextProviderProps) {
  const { children } = props;
  const [shoes, _setShoes] = useState(initialShoes);

  return (
    <ShoesContext.Provider value={{ shoes }}>{children}</ShoesContext.Provider>
  );
}
