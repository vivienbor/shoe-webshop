import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ShoesContext, type ShoesContextType } from "../contexts/ShoesContext";
import {
  Box,
  Button,
  capitalize,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import EdgeDrawer from "../components/EdgeDrawer";

export function ShoePage() {
  const { name } = useParams();
  const [open, setOpen] = useState(false);
  const { shoes } = useContext(ShoesContext) as ShoesContextType;
  const [selectedSize, setSelectedSize] = useState<number | undefined>();
  const { addShoeToBag } = useContext(BagContext) as BagContextType;
  const [isAddedToBag, setIsAddedToBag] = useState<boolean>(false);
  const theme = useTheme();
  const isDesktopSize = useMediaQuery(theme.breakpoints.up("md"));

  const clickedShoe = shoes.find((shoe) => shoe.name === name);

  const selectShoeSize = (size: number) => {
    setSelectedSize(size);
  };

  if (!clickedShoe) return <></>;

  const renderShoeData = () => (
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
    </Box>
  );

  return (
    <Grid
      container
      sx={{ alignItems: "center", maxWidth: "1228px", margin: "16px auto" }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {renderShoeData()}
        </Box>
        <img src={clickedShoe.image} width="100%" />
      </Grid>
      <Grid
        sx={{ mx: { xs: 2, md: 0 }, p: { xs: 0, md: 2 }, mt: "12px" }}
        size={{ xs: 12, md: 6 }}
      >
        <Grid
          size={{ xs: 12 }}
          sx={{ display: { xs: "none", md: "block" }, pb: 10 }}
        >
          {renderShoeData()}
        </Grid>
        <Grid size={12}>
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
                      borderColor:
                        selectedSize === size ? "black" : "lightgray",
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
              if (!isDesktopSize) setOpen(true);
            }}
          >
            Add to Bag
          </Button>
        </Grid>
      </Grid>
      <Box p={3} />
      {isAddedToBag && selectedSize && !isDesktopSize && (
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
