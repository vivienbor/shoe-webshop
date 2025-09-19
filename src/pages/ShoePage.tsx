import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ShoesContext, type ShoesContextType } from "../contexts/ShoesContext";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BagContext, type BagContextType } from "../contexts/BagContext";

export function ShoePage() {
  const { name } = useParams();
  const { shoes } = useContext(ShoesContext) as ShoesContextType;
  const [selectedSize, setSelectedSize] = useState<number | undefined>();
  const { addShoeToBag } = useContext(BagContext) as BagContextType;

  const clickedShoe = shoes.find((shoe) => shoe.name === name);

  const selectShoeSize = (size: number) => {
    setSelectedSize(size);
  };

  if (!clickedShoe) return <></>;

  return (
    <Box>
      <Box sx={{ mx: 2, mb: "12px" }}>
        <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
          {clickedShoe.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray" }}>
          {clickedShoe.category}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
          € {clickedShoe.price}
        </Typography>
      </Box>
      <img src={clickedShoe.image} width="100%" />
      <Box sx={{ mx: 2, mt: "12px" }}>
        <Typography variant="subtitle1">Select Size</Typography>
        <Grid container spacing={1} mt={1}>
          {clickedShoe?.sizes.map((size) => {
            return (
              <Grid size={4} key={size}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "6px 0",
                    color: "black",
                    borderColor: selectedSize === size ? "black" : "lightgray",
                  }}
                  onClick={() => selectShoeSize(size)}
                >
                  EU {size}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <Button
          fullWidth
          sx={{
            backgroundColor: "black",
            color: "white",
            marginTop: "6px",
            borderRadius: "24px",
          }}
          onClick={() =>
            addShoeToBag({
              shoe: clickedShoe,
              size: selectedSize || 0,
              quantity: 1,
            })
          }
        >
          Add to Bag
        </Button>
      </Box>
    </Box>
  );
}
