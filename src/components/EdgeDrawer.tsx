import { Global } from "@emotion/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, capitalize, CardMedia, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import type { Shoe } from "../types/Shoe.type";
import { calculateTotalQuantity } from "../utils/bagUtils";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: (theme.vars || theme).palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shoe: Shoe;
  size: number;
};

export default function EdgeDrawer(props: Props) {
  const { open, setOpen, shoe, size } = props;
  const { bag } = React.useContext(BagContext) as BagContextType;
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const container = window.document.body;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(42.5% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        keepMounted
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              p: 2,
            }}
          >
            <CheckCircleIcon color="success" />
            <Typography sx={{ color: "black", ml: 1 }}>
              Added to the Bag
            </Typography>
          </Box>
        </StyledBox>
        <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          <Grid container alignItems="center">
            <Grid size={5}>
              <CardMedia
                component="img"
                height="125px"
                width="125px"
                image={shoe.image}
                alt={shoe.name}
              />
            </Grid>
            <Grid size={7} pl={2}>
              <Typography
                variant="body2"
                fontSize="1.1em"
                gutterBottom
                component="div"
                m={0}
              >
                {shoe.name}
              </Typography>
              <Typography
                variant="body2"
                fontSize="1.1em"
                sx={{ color: "text.secondary" }}
              >
                {capitalize(shoe.category)}
              </Typography>
              <Typography
                variant="body2"
                fontSize="1.1em"
                sx={{ color: "text.secondary" }}
              >
                Size {size}
              </Typography>
              <Typography variant="body2" fontSize="1.1em">
                € {shoe.price}
              </Typography>
            </Grid>
          </Grid>
          <Button
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid lightgrey",
              mt: 2,
              borderRadius: "24px",
              textTransform: "none",
            }}
            onClick={() => {
              navigate("/bag", { replace: true });
              setOpen(false);
            }}
          >
            Show bag ({calculateTotalQuantity(bag.items)})
          </Button>
          <Button
            fullWidth
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
              mt: 1,
              borderRadius: "24px",
              textTransform: "none",
            }}
            onClick={() => {
              navigate(`/payment?total=${bag.sum}`, { replace: true });
              setOpen(false);
            }}
          >
            Checkout
          </Button>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
