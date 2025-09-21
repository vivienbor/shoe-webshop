import type { Category } from "../constants/category";
import type { Gender } from "../constants/gender";
import type { Shoe } from "../types/Shoe.type";

export const filterShoesByGenderAndCategory = (
  shoes: Shoe[],
  gender?: Gender,
  category?: Category
) => {
  if (gender && category) {
    return shoes.filter(
      (shoe) => shoe.gender === gender && shoe.category === category
    );
  } else if (gender) {
    return shoes.filter((shoe) => shoe.gender === gender);
  } else if (category) {
    return shoes.filter((shoe) => shoe.category === category);
  } else {
    return shoes;
  }
};
