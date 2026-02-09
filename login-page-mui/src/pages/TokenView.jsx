import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const TokenView = () => {
  const { state } = useLocation();

  return (
    <Box p={4}>
      <Typography variant="h6">Access Token</Typography>
      <Typography sx={{ wordBreak: "break-all", mt: 2 }}>
        {state?.token}
      </Typography>
    </Box>
  );
};

export default TokenView;
