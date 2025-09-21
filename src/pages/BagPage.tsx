import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useContext } from "react";
import BagItemComponent from "../components/BagItemComponent";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import { calculateTotalQuantity } from "../utils/bagUtils";
import { useNavigate } from "react-router";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 500,
  backgroundColor: alpha("#eee", 0.95),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function BagPage() {
  const { bag } = useContext(BagContext) as BagContextType;
  const navigate = useNavigate();

  const calculateProgress = () => {
    if (bag.sum >= 50) return 100;

    return bag.sum * 2;
  };

  return (
    <Box p={2} mt={3}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Stack direction="column" alignItems="center" p={2} mt={2}>
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
              backgroundColor: "black",
              color: "white",
              marginTop: "6px",
              borderRadius: "500px",
              height: "55px",
              mt: 3,
            }}
            fullWidth
            onClick={() => navigate(`/payment?total=${bag.sum}`)}
          >
            Go to Checkout
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
