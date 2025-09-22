import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import BagItemComponent from "../components/BagItemComponent";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import { calculateTotalQuantity } from "../utils/bagUtils";

export function BagPage() {
  const { bag } = useContext(BagContext) as BagContextType;
  const navigate = useNavigate();

  const calculateProgress = () => {
    if (bag.sum >= 50) return 100;

    return bag.sum * 2;
  };

  return (
    <Box p={2} mt={3}>
      <Stack direction="column" alignItems="center" p={2}>
        <Typography variant="h5">Bag</Typography>
        <Stack direction="row" alignItems="center">
          <Typography color="grey">
            {calculateTotalQuantity(bag.items)} Products{" "}
          </Typography>
          <Typography ml={1} mr={1}>
            |
          </Typography>
          <Typography>€ {bag.sum.toFixed(2)}</Typography>
        </Stack>
      </Stack>
      <Grid container>
        {bag.items.map((item) => (
          <BagItemComponent
            item={item}
            key={`${item.shoe.name}-${item.size}`}
          />
        ))}
        {bag.sum > 0 && (
          <Grid
            size={12}
            container
            sx={{ borderTop: 1, borderColor: "lightgrey", pt: 2 }}
          >
            <Grid size={12}>
              <Typography variant="h5">Summary</Typography>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
                  flexAlign: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">€{bag.sum.toFixed(2)}</Typography>
              </Box>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
                  flexAlign: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">
                  Estimated Shipping & Handling
                </Typography>
                <Typography variant="body2">
                  {bag.sum >= 50 ? "€0" : "€5"}
                </Typography>
              </Box>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
                  flexAlign: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">Estimated Tax (Incl. )</Typography>
                <Typography variant="body2">
                  €{Number((bag.sum / 100) * 10).toFixed(2)}
                </Typography>
              </Box>
            </Grid>
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
                  flexAlign: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2" fontWeight={700}>
                  Total
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                  €{bag.sum.toFixed(2)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
        <Grid
          size={12}
          sx={{ borderTop: 1, borderColor: "lightgrey", pt: 2, mt: 2 }}
        >
          <Box sx={{ pl: 1, mt: 3 }}>
            <Typography variant="caption">
              {bag.sum >= 50
                ? `You qualify for Free Shipping!`
                : `Add €${50.0 - bag.sum} more to qualify for Free Shipping.`}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={calculateProgress()}
                  color="success"
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >{`${Math.round(calculateProgress())}%`}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={12}>
          <Button
            sx={{
              "&.Mui-disabled": {
                background: "gray",
                color: "white",
              },
              backgroundColor: "black",
              color: "white",
              marginTop: "6px",
              borderRadius: "500px",
              height: "55px",
              mt: 3,
            }}
            fullWidth
            disabled={bag.items.length === 0}
            onClick={() => navigate(`/payment?total=${bag.sum}`)}
          >
            Go to Checkout
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
