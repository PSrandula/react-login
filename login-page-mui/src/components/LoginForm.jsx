import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
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
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    navigate("/token", { state: { token } });
  };

  return (
    <Box flex={1} p={4}>
      <Typography variant="h4" fontWeight={700}>
        Welcome back!
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Simplify your workflow and boost productivity
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
          type="password"
          margin="normal"
        />

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

      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{ borderRadius: 5, py: 1.2 }}
      >
        Google
      </Button>
    </Box>
  );
};

export default LoginForm;
