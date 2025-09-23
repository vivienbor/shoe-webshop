import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Badge, Menu, MenuItem, Typography } from "@mui/material";
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

  const handleMenuItemClick = (path: string) => {
    navigate(path, { replace: true });
    handleCloseNavMenu();
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike"
              style={{ height: 20, marginLeft: 0, cursor: "pointer" }}
              onClick={() => navigate("/", { replace: true })}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              gap: 3,
            }}
          >
            <Link
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "black",

                fontSize: "1.2em",
              }}
              to={"/shoes"}
            >
              All Shoes
            </Link>
            <Link
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "black",

                fontSize: "1.2em",
              }}
              to={"/shoes/men"}
            >
              Men
            </Link>
            <Link
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "black",

                fontSize: "1.2em",
              }}
              to={"/shoes/women"}
            >
              Women
            </Link>
            <Link
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "black",

                fontSize: "1.2em",
              }}
              to={"/shoes/unisex"}
            >
              Unisex
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton>
              <SearchOutlinedIcon sx={{ color: "gray" }} />
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
                sx={{ color: "rgba(0, 0, 0, 0.6)" }}
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
                <MenuItem onClick={() => handleMenuItemClick("/shoes")}>
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    All Shoes
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("/shoes/men")}>
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Men
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("/shoes/women")}>
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Women
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("/shoes/unisex")}>
                  <Typography
                    style={{
                      textAlign: "center",

                      color: "black",
                    }}
                  >
                    Unisex
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
