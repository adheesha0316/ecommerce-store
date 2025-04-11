import React from 'react';
import "./Register.css";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import signUpImage from '../../assets/signup-image.jpg';


export default function Register() {
  return (
    <div className="body">
      <Grid container className="form-container">
        <Grid item xs={12} md={6} className="left-side">
          <Typography variant="h4" component="h1" className="title" gutterBottom>
            Sign Up
          </Typography>
          <Box component="form" className="input-container">
            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                id="yourName"
                label="Your Name"
                variant="standard"
                margin="normal"
                required
                autoComplete="name"
                autoFocus
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
              <EmailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                id="yourEmail"
                label="Your Email"
                variant="standard"
                margin="normal"
                required
                autoComplete="email"
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
              <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
                margin="normal"
                required
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
              <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="standard"
                margin="normal"
                required
              />
            </Box>
            <FormControlLabel
              control={<Checkbox value="agree" color="primary" />}
              label="I agree to the terms and conditions"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className="signup-button"
            >
              Sign Up
            </Button>
            <Typography variant="body2" className="login-link">
              Already have an account? <a href="#">Log In</a>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="right-side">
          <img src={signUpImage} alt="Sign Up Illustration" className="signup-image" />
        </Grid>
      </Grid>
    </div>
  );
}