import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { UserState } from "../Contexts/UserProvider";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState();
  const navigate = useNavigate();
  const { user, setUser } = UserState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const logout = () => {
    setUser({});
    navigate("/");
    handleCloseUserMenu();
  };
  const handleCloseNavMenu = (page) => {
    if (typeof page === "string") {
      navigate(`/${page}`);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (page) => {
    if (typeof page === "string") {
      navigate(page);
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SAMYAK
          </Typography>

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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => handleCloseNavMenu("")}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {user.type === "user" ? (
                <>
                  <MenuItem onClick={() => handleCloseNavMenu("requestLoan")}>
                    <Typography textAlign="center">Request Loan</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseNavMenu("myLoans")}>
                    <Typography textAlign="center">My Loans</Typography>
                  </MenuItem>
                </>
              ) : (
                user.type === "admin" && (
                  <MenuItem onClick={() => handleCloseNavMenu("loanRequests")}>
                    <Typography textAlign="center">Loan Requests</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SAMYAK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => handleCloseNavMenu("")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            {user.type === "user" ? (
              <>
                <Button
                  onClick={() => handleCloseNavMenu("requestLoan")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Request Loan
                </Button>
                <Button
                  onClick={() => handleCloseNavMenu("myLoans")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  My Loans
                </Button>
              </>
            ) : (
              user.type === "admin" && (
                <Button
                  onClick={() => handleCloseNavMenu("loanRequests")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Loan Requests
                </Button>
              )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              {!user.name && (
                <MenuItem onClick={() => handleCloseUserMenu("/login")}>
                  <Typography textAlign="center">Login/SignUp</Typography>
                </MenuItem>
              )}
              {user.name && (
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
