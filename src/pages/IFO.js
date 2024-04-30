import React from "react";
import { Box, useTheme } from "@mui/material";
import LaunchBanner from "../components/IFO/LaunchBanner";
import IFOSection from "../components/IFO/IFOSection";
import Details from "../components/IFO/Details";
import bg from "../assets/ifo-bg.png";

const IFO = () => {
  const theme = useTheme();
  return (
    <Box
      className="w-full h-fit p-5 pt-28 flex justify-center"
      sx={{
        backgroundColor: theme.palette.main,
      }}
    >
      <Box
        className="w-full 2xl:max-w-[1120px] h-fit z-10"
      >
        <LaunchBanner />
        <IFOSection />
        <Details />
      </Box>
    </Box>
  );
};

export default IFO;
