import { Box, IconButton, Link as MuiLink, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";

export function FooterComponent() {
  const navigate = useNavigate();

  return (
    <Box component="footer" p={2} pt={4}>
      <Box maxWidth="750px" sx={{ margin: "0 auto" }}>
        <Box textAlign="center" py={2}>
          <IconButton>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike"
              style={{ height: 20, marginLeft: 0 }}
              onClick={() => navigate("/", { replace: true })}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            py: 2,
          }}
        >
          <MuiLink
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Find a Store
          </MuiLink>
          <MuiLink
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Help
          </MuiLink>
          <MuiLink
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Join Us
          </MuiLink>
          <MuiLink
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Sign In
          </MuiLink>
        </Box>
        <Box
          sx={{
            borderTop: { xs: 1, md: 0 },
            borderColor: "lightgrey",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
            color: "rgba(0, 0, 0, 0.6)",
          }}
          py={4}
        >
          <CopyrightIcon />
          <Typography variant="subtitle1">
            2025 Nike, Inc. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
