import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setError("Invalid email format");
      return;
    }
    setError("");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      navigate("/token", { state: { token } });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError("Google sign-in failed");
    }
  };

  const handleAppleLogin = () => {
    // placeholder - implement Apple sign-in if needed
    // eslint-disable-next-line no-console
    console.log("Apple login clicked");
  };

  const handleFacebookLogin = () => {
    // placeholder - implement Facebook sign-in if needed
    // eslint-disable-next-line no-console
    console.log("Facebook login clicked");
  };

  const toggleShowPassword = () => setShowPassword((s) => !s);

  return (
    <Box flex={1} p={4}>
      <Typography variant="h4" fontWeight={700}>
        Welcome back!
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Simplify your workflow and boost productivity <br />
        with{" "}
        <Typography component="span" fontWeight={700}>
          Tuga's App.
        </Typography>{" "}
        Get started for free.
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(error)}
          helperText={error}
        />

        <TextField
          fullWidth
          label="Password"
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box display="flex" justifyContent="flex-end" mt={0.5}>
          <Link component="button" variant="body2" onClick={() => {}}>
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 3, py: 1.2, borderRadius: 5, bgcolor: "#000" }}
        >
          Login
        </Button>
      </form>

      <Divider sx={{ my: 3 }}>or continue with</Divider>

      <Box display="flex" gap={2} justifyContent="center">
        <IconButton
          onClick={handleGoogleLogin}
          sx={{ bgcolor: "background.paper", border: "1px solid #ddd" }}
          aria-label="Continue with Google"
        >
          <GoogleIcon />
        </IconButton>

        <IconButton
          onClick={handleAppleLogin}
          sx={{ bgcolor: "background.paper", border: "1px solid #ddd" }}
          aria-label="Continue with Apple"
        >
          <AppleIcon />
        </IconButton>

        <IconButton
          onClick={handleFacebookLogin}
          sx={{ bgcolor: "background.paper", border: "1px solid #ddd" }}
          aria-label="Continue with Facebook"
        >
          <FacebookIcon />
        </IconButton>
      </Box>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="text.secondary">
          Not a member?{' '}
          <Link component="button" onClick={() => navigate('/register')}>
            Register now.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
