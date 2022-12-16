import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

function ResponsiveAppBar() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const router = useRouter();

  useEffect(() => {
    setName(JSON.parse(getCookie("user")).name);
    setStudentId(JSON.parse(getCookie("user")).studentId);
  }, []);

  const handleLogout = () => {
    deleteCookie("user");
    router.push("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {name} - {studentId}
          </Typography>

          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {name} - {studentId}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleLogout} sx={{ p: 0 }}>
                <Typography textAlign="center" className="text-white flex items-center">
                  <LogoutIcon />
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
