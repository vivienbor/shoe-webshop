import { Box, Typography } from "@mui/material";

export function CommercialComponent() {
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        color: "black",
        textAlign: "center",
        borderBottom: 1,
        borderColor: "lightgrey",
      }}
    >
      <Typography sx={{ textDecoration: "underline", fontSize: "0.8em" }}>
        Free Shipping on Orders €50+
      </Typography>
    </Box>
  );
}
