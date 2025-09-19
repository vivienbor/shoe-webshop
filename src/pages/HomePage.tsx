import { Grid } from "@mui/material";
import ShoeCardComponent from "../components/ShoeCardComponent";
import { useContext } from "react";
import { ShoesContext, type ShoesContextType } from "../contexts/ShoesContext";

export function HomePage() {
  const { shoes } = useContext(ShoesContext) as ShoesContextType;

  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      {shoes.map((shoe) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }} key={shoe.name}>
          <ShoeCardComponent shoe={shoe} />
        </Grid>
      ))}
    </Grid>
  );
}
