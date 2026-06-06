import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function Signup() {

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async () => {

    try {

      await API.post(
        "/auth/signup",
        formData
      );

      alert("Signup Successful");

      navigate("/");

    }
    catch (error) {

      alert(
        error.response?.data?.message ||
        "Signup Failed"
      );

    }
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: darkMode
          ? "linear-gradient(135deg,#020617,#0f172a,#1e293b)"
          : "linear-gradient(135deg,#f8fafc,#e2e8f0,#cbd5e1)",
        position: "relative",
        transition: "0.3s"
      }}
    >
      <IconButton
        onClick={() => setDarkMode(!darkMode)}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: darkMode ? "white" : "black"
        }}
      >
        {
          darkMode
            ? <LightModeIcon />
            : <DarkModeIcon />
        }
      </IconButton>

      <Paper
        elevation={10}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 5,
          background: darkMode ? "#0f172a" : "#f8fafc",
          color: darkMode ? "white" : "black"
        }}
      >

        <Typography
          variant="h3"
          sx={{
            textAlign: "center"
          }}
          fontWeight="bold"
        >
          Social Sphere
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "gray",
            mb: 3
          }}
        >
          Create New Account
        </Typography>

        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: darkMode ? "white" : "black"
            },
            "& .MuiInputLabel-root": {
              color: darkMode ? "#94a3b8" : "#475569"
            }
          }}
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: darkMode ? "white" : "black"
            },
            "& .MuiInputLabel-root": {
              color: darkMode ? "#94a3b8" : "#475569"
            }
          }}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: darkMode ? "white" : "black"
            },
            "& .MuiInputLabel-root": {
              color: darkMode ? "#94a3b8" : "#475569"
            }
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            borderRadius: 3
          }}
          onClick={handleSubmit}
        >
          Signup
        </Button>

        <Typography
          sx={{ textAlign: "center", mt: 3 }}
        >
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: darkMode ? "#38bdf8" : "#2563eb"
            }}
          >
            Login
          </Link>
        </Typography>

      </Paper>

    </Box>
  );
}