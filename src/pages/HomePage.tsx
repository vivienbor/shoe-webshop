import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router";

export function HomePage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktopSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container>
      <Grid
        size={{ xs: 12 }}
        sx={{ position: "relative", textAlign: "center" }}
      >
        <img
          style={{
            width: isDesktopSize ? "100%" : "100%",
            height: isDesktopSize ? "unset" : "450px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="nike commercial"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c185e991977919.5eb713159174b.png"
        />
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            marginTop: "6px",
            borderRadius: "500px",
            height: "35px",
            width: "255px",
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => navigate("/shoes")}
        >
          Explore
        </Button>
      </Grid>
    </Grid>
  );
}
