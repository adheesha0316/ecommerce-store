import { useState } from "react";
import "./Login.css";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import loginImage from "../../assets/signin-image.jpg";
import instance from "../../service/AxiosOder";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setEmailError("");
    setPasswordError("");
    setLoading(true);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
      setLoading(false);
      return;
    }

    if (!password || password.length < 4) {
      setPasswordError("Password must be at least 4 characters.");
      setLoading(false);
      return;
    }

    instance
      .post("/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setEmailError("Login failed. Please check your credentials.");
        setLoading(false);
      });

    console.log("Loggin Success:", { email, password });
    alert("Login Success!");
    setLoading(false);
  };

  return (
    <Box className="body">
      <Grid container className="form-container">
        <Grid item xs={12} md={6} className="left-side">
          <img
            src={loginImage}
            alt="Sign Up Illustration"
            className="signin-image"
          />
        </Grid>

        <Grid className="right-side" item xs={12} sm={6}>
          <Typography
            variant="h4"
            component="h1"
            className="title"
            gutterBottom
          >
            Sign In
          </Typography>

          <Box component="form" className="input-container">
            <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
              <AccountCircle sx={{ color: "action.active", mr: 1 }} />
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                required
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
              <LockOutlinedIcon sx={{ color: "action.active", mr: 1 }} />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                required
              />
            </Box>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              disabled={loading}
              sx={{ mt: 2, mb: 2 }}
            >
              {loading ? <div className="loading-spinner" /> : "Log in"}
            </Button>

            <Typography variant="body2" align="center" gutterBottom>
              Or login with
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
            >
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary">
                <GoogleIcon />
              </IconButton>
            </Box>

            <Typography variant="body2" align="center">
              Don&apos;t have an account? <Link to="/register">Sign Up</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
