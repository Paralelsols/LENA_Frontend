import { Box, useTheme } from "@mui/material";
import React from "react";
import Wrapper from "../components/Mint/Wrapper";
import Banner from "../components/Mint/Banner";
import Faq from "../components/Mint/Faq";

const Mint = () => {
  const theme = useTheme();
  return (
    <Box
      className="w-full min-h-screen"
      sx={{
        backgroundColor: theme.palette.main,
      }}
    >
      <Wrapper />
      <Banner reverse={true} />
      <Banner id={"utility"} />
      <Banner reverse={true} id={"leaderboard"} />
      <Faq />
    </Box>
  );
};

export default Mint;
