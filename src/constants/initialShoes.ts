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
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0d26b559-372c-4d03-8169-fa1d70d67ebf/JORDAN+SPIZIKE+LOW.png",
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
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98ab4dfa-9235-4b85-8d5c-e19c5eb5a94b/AIR+FORCE+1+%2707+LV8.png",
    name: "Nike Air Force 1'07 LV8",
    category: Category.Lifestyle,
    price: 119.99,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4d56adf-b6cd-42af-bdd7-8f40abf4161d/NIKE+VOMERO+PLUS.png",
    name: "Nike Vomero Plus",
    category: Category.Running,
    price: 124.99,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b401b1e-b1a7-4860-a920-4296b5a12296/NIKE+AIR+MAX+90.png",
    name: "Nike Air Max 90",
    category: Category.Lifestyle,
    price: 134.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/xa3j5pmlqu9lz6y1xbsb/NIKE+SHOX+TL.png",
    name: "Nike Shox TL",
    category: Category.CrossTraining,
    price: 149.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fb1b763b-54ad-49f4-86c1-112304573a32/AIR+JORDAN+1+LOW.png",
    name: "Air Jordan 1 Low",
    category: Category.Basketball,
    price: 199.99,
    sizes: [40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/811c111a-ce5b-4990-b5b2-b7ebb4cd6f68/NIKE+VOMERO+18.png",
    name: "Nike Vomero 18",
    category: Category.CrossTraining,
    price: 139.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/601feabb-fa28-42b7-bd24-123274013d80/NIKE+PEGASUS+PREMIUM.png",
    name: "Nike Pegasus Premium",
    category: Category.Running,
    price: 69.99,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d348f68b-0f45-4d47-8e7f-14520e7aafad/AIR+JORDAN+4+RETRO.png",
    name: "Air Jordan Retro",
    category: Category.Lifestyle,
    price: 109.99,
    sizes: [36, 37, 38, 39, 40],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uirypqqxq83mwcjbf9ej/AIR+MONARCH+IV.png",
    name: "Nike Air Monarch IV",
    category: Category.Basketball,
    price: 119.99,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cb44d8d-b86f-4a4c-806e-06571cc1a9aa/WMNS+NIKE+AIR+MAX+MUSE.png",
    name: "Nike Air Max Muse",
    category: Category.Lifestyle,
    price: 99.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/856d5722-7442-490f-8cf2-259c42fc0050/JORDAN+LUKA+.77.png",
    name: "Luka .77",
    category: Category.Running,
    price: 249.99,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e761d95-3f78-4266-9ed7-b0e04b4989e3/NIKE+AIR+MAX+PLUS+III.png",
    name: "Nike Air Max Plus 3",
    category: Category.Lifestyle,
    price: 129.99,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c21aaae-47b2-447c-87d5-2d75237442fc/NIKE+V5+RNR.png",
    name: "Nike V5 RNR",
    category: Category.CrossTraining,
    price: 149.99,
    sizes: [38, 39, 40, 41, 42, 43],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/690c8469-5d8a-4e27-915e-e34b2c48a747/TOTAL+90.png",
    name: "Nike Total 90",
    category: Category.Running,
    price: 129.99,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2990f85d-8844-4e5b-a222-31ed53a5a9d4/NIKE+DUNK+LOW+RETRO.png",
    name: "Nike Dunk Low Retro",
    category: Category.Basketball,
    price: 119.99,
    sizes: [39, 40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a80d1905-5296-4aa9-855a-1d617e3c98f6/AIR+FORCE+1+LOW+RETRO+PRM.png",
    name: "Nike Air Force 1 Low",
    category: Category.Lifestyle,
    price: 149.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a1d2b684-c446-4c2a-81eb-89fcc6f75a4e/JA+3.png",
    name: "JA 3 'Channel 12'",
    category: Category.Basketball,
    price: 139.99,
    sizes: [40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d42ebd2d-0952-4bd4-a8a7-04d0482dfdf3/AIR+FORCE+1+LUXE.png",
    name: "Nike Air Force 1 Luxe",
    category: Category.Lifestyle,
    price: 109.99,
    sizes: [36, 37, 38, 39, 40],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a710787c-70eb-489b-a37a-8c5d3d0f3fc2/AIR+MAX+DN.png",
    name: "Nike Air Max Dn",
    category: Category.Running,
    price: 189.99,
    sizes: [38, 39, 40, 41, 42, 43],
    gender: Gender.Unisex,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e00cf75-091e-4e17-8d86-7a6360004b45/NIKE+AIR+MAX+PLUS+UTILITY.png",
    name: "Nike Air Max Utility",
    category: Category.CrossTraining,
    price: 149.99,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    gender: Gender.Men,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c051ae0-81a2-445c-a18c-128310c2e237/AIR+ZOOM+PEGASUS+41.png",
    name: "Nike Pegasus 41",
    category: Category.Lifestyle,
    price: 89.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d4a4bcdf-f1cb-44c0-8949-1e6e892cff97/AIR+JORDAN+1+MID.png",
    name: "Air Jordan 1 Mid",
    category: Category.Lifestyle,
    price: 89.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28984e64-4e1a-42a5-948f-648eae42e0d7/NIKE+REVOLUTION+8.png",
    name: "Nike Revolution 8",
    category: Category.Lifestyle,
    price: 89.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6c1b0a3-60ed-40d2-9aca-341468fb222e/NIKE+REACT+VISION.png",
    name: "Nike React Vision",
    category: Category.Lifestyle,
    price: 89.99,
    sizes: [36, 37, 38, 39, 40, 41],
    gender: Gender.Women,
    isFav: false,
  },
];
