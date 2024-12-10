import React from "react";
import { TextField, Button, Box, Typography, Paper, Grid2 } from "@mui/material";
import axios from 'axios'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate=useNavigate()

  const [formData , setformData] = useState({
    email:"",
    password:""
  });



const handleChange = async (e) =>{
  const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
}

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const response = await axios.post( "http://localhost:8000/api/auth/login" , formData);
    navigate("/")

  }
  return (
    <Grid2
      container
      component="main"
      sx={{ height: "100vh" }}
    >
      {/* Left Side - Optional Image or Branding */}
      <Grid2
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
         backgroundImage: 'url(https://unsplash.com/photos/a-close-up-of-a-tree-with-yellow-leaves-VfWPi87SOKw)',
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Right Side - Login Form */}
      <Grid2 item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Page Title */}
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          
          {/* Login Form */}
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            {/* Email Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            
            {/* Password Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            
            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
           
            >
              Login
            </Button>
            
            {/* Additional Links */}
            <Grid2 container>
              <Grid2 item xs>
                <Typography variant="body2" sx={{ cursor: "pointer" }}>
                  Forgot password?
                </Typography>
              </Grid2>
              <Grid2 item>
                <Typography variant="body2" sx={{ cursor: "pointer" }}>
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Login;
