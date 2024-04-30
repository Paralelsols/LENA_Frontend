import React from "react";
import { Box, useTheme } from "@mui/material";
// Components
import Wrapper from "../components/Home/Wrapper";
import Collections from "../components/Home/Collections";
import Banner from "../components/Home/Banner";
import Roadmap from "../components/Home/Roadmap";
import Banner1 from "../components/Home/Banner1";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      className="w-full min-h-screen overflow-x-hidden flex flex-col items-center"
      sx={{
        backgroundColor: theme.palette.main,
      }}
    >
        <Wrapper theme={theme} />
        <Collections theme={theme} />
        <Banner1 reverse={true} theme={theme} />
        <Banner theme={theme} />
        <Roadmap theme={theme} />
    </Box>
  );
};

export default Home;
