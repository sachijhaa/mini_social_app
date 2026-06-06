import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  TextField,
  Chip
} from "@mui/material";
import { useNavigate }
  from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import LightModeIcon from "@mui/icons-material/LightMode";
import Badge from "@mui/material/Badge";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [notificationCount, setNotificationCount] = useState(3);
  const [dark, setDark]
    =
    useState(true);
  const user =
    JSON.parse(localStorage.getItem("user"));

  return (

    <AppBar
      position="sticky"
      sx={{
        background: "#0f172a"
      }}
    >

      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold"
          }}
        >
          Social Sphere
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <TextField
          size="small"
          placeholder="Search posts..."
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            width: 250,
            ml: 3
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <IconButton
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >

          {
            darkMode
              ?
              <LightModeIcon sx={{ color: "white" }} />
              :
              <DarkModeIcon sx={{ color: "black" }} />
          }
        </IconButton>

        {/* Notification */}

        <IconButton
          sx={{ color: "white" }}
          onClick={() => {

            alert(
              `You have ${notificationCount} notifications`
            );

            setNotificationCount(0);

          }}
        >
          <Badge
            badgeContent={notificationCount}
            color="error"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Chip
          label="⭐ 50"
          sx={{
            ml: 2,
            borderRadius: "30px",
            bgcolor: "#facc15",
            color: "black",
            fontWeight: "bold"
          }}
        />

        <Chip
          label="₹0.00"
          sx={{
            ml: 1,
            borderRadius: "30px",
            bgcolor: "#22c55e",
            color: "white",
            fontWeight: "bold"
          }}
        />

        <Avatar
          onClick={() => {

            localStorage.clear();

            navigate("/");

          }}
        >
          {user?.username?.charAt(0)}
        </Avatar>

      </Toolbar>

    </AppBar>

  );
}