import { capitalize, Grid, Typography } from "@mui/material";
import ShoeCardComponent from "../components/ShoeCardComponent";
import { useContext } from "react";
import { ShoesContext, type ShoesContextType } from "../contexts/ShoesContext";
import { useParams } from "react-router";
import { filterShoesByGenderAndCategory } from "../utils/shoesUtils";
import type { Gender } from "../constants/gender";
import type { Category } from "../constants/category";
import BreadcrumbComponent from "../components/BreadcrumbComponent";

export function ShoesPage() {
  const { shoes } = useContext(ShoesContext) as ShoesContextType;
  const { gender, category } = useParams();
  const filteredShoes = filterShoesByGenderAndCategory(
    shoes,
    gender as Gender,
    category as Category
  );

  return (
    <Grid container rowSpacing={1} columnSpacing={1} mt={3}>
      <Grid size={12}>
        <BreadcrumbComponent />
      </Grid>
      <Grid
        size={12}
        px={2}
        sx={{ borderBottom: 1, borderColor: "lightgrey", pb: 2, mb: 1 }}
      >
        {!gender && (
          <Typography variant="subtitle1" fontSize="1.4em">
            All Shoes
          </Typography>
        )}
        {gender && !category && (
          <Typography variant="subtitle1" fontSize="1.4em">
            {capitalize(gender)} Shoes
          </Typography>
        )}
        {gender && category && (
          <Typography variant="subtitle1" fontSize="1.4em">{`${capitalize(
            gender
          )} ${capitalize(category)} Shoes`}</Typography>
        )}
      </Grid>
      <Grid size={12}>
        <Typography
          variant="subtitle1"
          fontSize="1.1em"
          color="rgba(0, 0, 0, 0.6)"
          px={2}
          mb={0.75}
        >
          {filteredShoes.length} Results
        </Typography>
      </Grid>
      {filteredShoes.map((shoe) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }} key={shoe.name}>
          <ShoeCardComponent shoe={shoe} />
        </Grid>
      ))}
    </Grid>
  );
}
