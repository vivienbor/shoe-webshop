import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ShoesContext, type ShoesContextType } from "../contexts/ShoesContext";
import { Box, Button, capitalize, Grid, Typography } from "@mui/material";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import EdgeDrawer from "../components/EdgeDrawer";

export function ShoePage() {
  const { name } = useParams();
  const [open, setOpen] = useState(false);
  const { shoes } = useContext(ShoesContext) as ShoesContextType;
  const [selectedSize, setSelectedSize] = useState<number | undefined>();
  const { addShoeToBag } = useContext(BagContext) as BagContextType;
  const [isAddedToBag, setIsAddedToBag] = useState<boolean>(false);

  const clickedShoe = shoes.find((shoe) => shoe.name === name);

  const selectShoeSize = (size: number) => {
    setSelectedSize(size);
  };

  if (!clickedShoe) return <></>;

  return (
    <Grid
      container
      sx={{ alignItems: "center", maxWidth: "1228px", margin: "0 auto" }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ mx: { xs: 2, md: 0 }, mb: "12px" }}>
          <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
            {clickedShoe.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
            {capitalize(clickedShoe.category)}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
            € {clickedShoe.price}
          </Typography>
          <img src={clickedShoe.image} width="100%" />
        </Box>
      </Grid>
      <Grid
        sx={{ mx: { xs: 2, md: 0 }, p: { xs: 0, md: 2 }, mt: "12px" }}
        size={{ xs: 12, md: 6 }}
      >
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
          disabled={!selectedSize}
          fullWidth
          sx={{
            "&.Mui-disabled": {
              background: "gray",
              color: "white",
            },
            backgroundColor: "black",
            color: "white",
            mt: 2,
            borderRadius: "24px",
          }}
          onClick={() => {
            addShoeToBag({
              shoe: clickedShoe,
              size: selectedSize || 0,
              quantity: 1,
            });
            setIsAddedToBag(true);
            setOpen(true);
          }}
        >
          Add to Bag
        </Button>
      </Grid>
      <Box p={3} />
      {isAddedToBag && selectedSize && (
        <EdgeDrawer
          open={open}
          setOpen={setOpen}
          shoe={clickedShoe}
          size={selectedSize}
        />
      )}
    </Grid>
  );
}
