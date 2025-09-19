import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router";

export default function AppbarComponent() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", m: 0, color: "black" }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", alignItems: "center", pr: 0 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike"
                style={{ height: 15, marginLeft: 0 }}
                onClick={() => navigate("/", { replace: true })}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <SearchOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton>
              <PersonOutlineOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton>
              <WorkOutlineOutlinedIcon
                sx={{ color: "gray" }}
                onClick={() => navigate("/bag")}
              />
            </IconButton>
            <IconButton>
              <MenuIcon sx={{ color: "gray" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
