import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Badge, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import { calculateTotalQuantity } from "../utils/bagUtils";

export default function AppbarComponent() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { bag } = useContext(BagContext) as BagContextType;
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", m: 0, color: "black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike"
                style={{ height: 20, marginLeft: 0 }}
                onClick={() => navigate("/", { replace: true })}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton>
              <SearchOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton>
              <PersonOutlineOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <Badge
              badgeContent={calculateTotalQuantity(bag.items)}
              sx={{ color: "gray" }}
              overlap="circular"
            >
              <IconButton>
                <WorkOutlineOutlinedIcon
                  sx={{ color: "gray" }}
                  onClick={() => navigate("/bag")}
                />
              </IconButton>
            </Badge>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={"/shoes/men"}
                  >
                    Men
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={"/shoes/women"}
                  >
                    Women
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={"/shoes/unisex"}
                  >
                    Unisex
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
