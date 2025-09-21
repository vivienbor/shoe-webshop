import type { Category } from "../constants/category";
import type { Gender } from "../constants/gender";

export type Shoe = {
  image: string;
  name: string;
  category: Category;
  gender: Gender;
  price: number;
  sizes: number[];
  isFav: boolean;
  specialDescription?: string;
};
