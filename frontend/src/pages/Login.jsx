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
export default function Login() {

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
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

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/feed");

    }
    catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
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
          color: darkMode ? "white" : "#0f172a",
          transition: "0.3s"
        }}
      >

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            textAlign: "center"
          }}
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
          Welcome Back
        </Typography>

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
          Login
        </Button>

        <Typography
          sx={{
            textAlign: "center",
            mt: 3
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: darkMode ? "#38bdf8" : "#2563eb"
            }}
          >
            Signup
          </Link>
        </Typography>

      </Paper>

    </Box>
  );
}