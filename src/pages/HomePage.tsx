import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
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
      </Box>
      <Box sx={{ position: "relative" }}>
        <img
          src="https://images.unsplash.com/photo-1518214598173-1666bc921d66?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="running in the desert"
          style={{ width: "100%" }}
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
      </Box>
    </Box>
  );
}
