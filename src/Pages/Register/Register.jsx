import { useState } from "react";
import "./Register.css";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import signUpImage from "../../assets/signup-image.jpg";
import instance from "../../service/AxiosOder";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    console.log("reg request");
    setErrorMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    instance
      .post("/register", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("Register Success:", { name, email, password });
    alert("Register Success!");
  };
  return (
    <div className="body">
      <Grid container className="form-container">
        <Grid item xs={12} md={6} className="left-side">
          <Typography
            variant="h4"
            component="h1"
            className="title"
            gutterBottom
          >
            Sign Up
          </Typography>
          <Box component="form" className="input-container">
            <Box
              sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
            >
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                id="yourName"
                label="Your Name"
                variant="standard"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                autoFocus
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
            >
              <EmailOutlinedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                fullWidth
                id="yourEmail"
                label="Your Email"
                variant="standard"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
            >
              <LockOutlinedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
            >
              <LockOutlinedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="standard"
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              onClick={handleRegister}
            >
              Sign Up
            </Button>
            <Typography variant="body2" className="login-link">
              Already have an account? <Link to="/">Log In</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="right-side">
          <img
            src={signUpImage}
            alt="Sign Up Illustration"
            className="signup-image"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
