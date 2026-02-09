import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";
import image from "../assets/undraw_secure-login_m11a.svg";

const Login = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <Box display="flex" maxWidth={1000} width="100%">
        <LoginForm />
        <Box
          flex={1}
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          bgcolor="#f4f8f4"
        >
          <img src={image} alt="login" width="80%" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
