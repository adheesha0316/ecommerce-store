import React from 'react';
import "./Login.css";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, IconButton, Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import loginImage from '../../assets/signin-image.jpg'; 

function Login() {
  return (
    <div className="body">
      <Grid container className="form-container">
        <Grid item xs={12} md={6} className="left-side">
          <img src={loginImage} alt="Sign In Illustration" className="login-image" />
        </Grid>
        <Grid item xs={12} md={6} className="right-side">
          <Typography variant="h4" component="h1" className="title" gutterBottom>
            Sign In
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
              <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> 
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                margin="normal"
                required
              />
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
            >
              Log in
            </Button>
            <div className="social-login-container">
              <Typography variant="body2">Or login with</Typography>
              <div className="social-icons">
                <IconButton color="primary" aria-label="facebook" className="social-icon">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" aria-label="twitter" className="social-icon">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" aria-label="google" className="social-icon">
                  <GoogleIcon />
                </IconButton>
              </div>
            </div>
            <Typography variant="body2" className="create-account">
              Don't have an account? <a href="#">Sign Up</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;