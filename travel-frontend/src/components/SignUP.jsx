import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid2,
  Link,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const navigate =useNavigate()
  const [formData , setformData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
const handleChange = async (e) =>{
  const {name , value} = e.target
  setformData({...formData , [name]:value})
}
const handleSubmit= async (e)=>{
  e.preventDefault();
  console.log("Form data being sent:", formData); // Debugging
  
  const response = await axios.post( "http://localhost:8000/api/auth/register" , formData)
  navigate("/")


}




  return (
    <Grid2 container component="main" sx={{ height: "100vh" }}>
      {/* Left Side - Optional Branding or Image */}
      <Grid2
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("https://source.unsplash.com/random")',
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right Side - Signup Form */}
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
            Sign Up
          </Typography>

          {/* Signup Form */}
          <Box component="form" noValidate sx={{ mt: 1 }}  onSubmit={handleSubmit}>
            {/* Name Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleChange}
            />

            {/* Email Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
              onChange={handleChange}
            />

            {/* Confirm Password Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="new-password"
              onChange={handleChange}
            />

            {/* Signup Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            {/* Additional Links */}
            <Grid2 container>
              <Grid2 item>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Already have an account?{" "}
                  <Link href="#" variant="body2">
                    Login
                  </Link>
                </Typography>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default SignUP;
