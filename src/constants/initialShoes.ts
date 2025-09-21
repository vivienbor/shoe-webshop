import type { Shoe } from "../types/Shoe.type";
import { Category } from "./category";
import { Gender } from "./gender";

export const initialShoes: Shoe[] = [
  {
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b6fb6cf3-b507-414f-83bf-6e74cdb84d6c/NIKE+P-6000.png",
    name: "Nike P-6000",
    category: Category.Running,
    price: 129.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a05eff1a-5d79-4071-b772-edaf41d1af59/NIKE+P-6000+SE.png",
    name: "Nike P-6000 SE",
    category: Category.Running,
    price: 139.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    name: "Nike Air Force 1'07",
    category: Category.CrossTraining,
    price: 119.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0d26b559-372c-4d03-8169-fa1d70d67ebf/JORDAN+SPIZIKE+LOW.png",
    name: "Jordan Spizike Low",
    category: Category.Lifestyle,
    price: 149.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/128904c9-6281-4d00-8ff0-ed791031c0bd/W+NIKE+AIR+MAX+MOTO+2K.png",
    name: "Nike Air Max Moto 2K",
    category: Category.Basketball,
    price: 159.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/92660a4f-4977-48d4-aeef-6f4bb707458b/NIKE+AIR+MAX+PLUS.png",
    name: "Nike Air Max Plus",
    category: Category.Basketball,
    price: 159.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
];
