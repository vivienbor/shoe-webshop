import { FiveK } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ position: "relative", textAlign: "center" }}
      >
        <img
          style={{ height: "850px" }}
          alt="nike commercial"
          src="https://images.squarespace-cdn.com/content/v1/53ea4886e4b0512fcb769ca3/1451380204824-D0ZJHTHZS87BQQEP942Z/FYG+Billboard"
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
            bottom: 32,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => navigate("/shoes")}
        >
          Explore
        </Button>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ position: "relative", textAlign: "center" }}
      >
        <img
          src="https://images.unsplash.com/photo-1518214598173-1666bc921d66?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="running in the desert"
          style={{ height: "850px" }}
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
            bottom: 32,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => navigate("/shoes/women/running")}
        >
          Women Running Shoes
        </Button>
      </Grid>
    </Grid>
  );
}
