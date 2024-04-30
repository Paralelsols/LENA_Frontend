import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StyledButton = ({ title, gradient }) => {
  const theme = useTheme();
  return (
    <Box className="button-border-gradient button-shadow w-fit p-[2.5px] rounded-full h-fit cursor-pointer">
      <Box
        className="h-fit py-3 w-56 text-center rounded-full"
        sx={{ backgroundColor: theme.palette.dark }}
      >
        <Typography
          sx={{ color: theme.palette.light }}
          className="text-[10px] font-semibold press-start"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledButton;
