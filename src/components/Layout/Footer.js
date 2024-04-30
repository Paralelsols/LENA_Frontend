import React from "react";
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsFileRuledFill } from "react-icons/bs";
import { FaBug } from "react-icons/fa6";

import logo from "../../assets/logo-white.png";

const Footer = () => {
  const links = [
    {
      title: "X (Twitter)",
      icon: <BsTwitterX />,
    },
    {
      title: "Telegram",
      icon: <FaTelegram />,
    },
    {
      title: "Medium",
      icon: <BiLogoMediumOld />,
    },
    {
      title: "Github",
      icon: <TbBrandGithubFilled />,
    },
    {
      title: "Governance",
      icon: <BsFileRuledFill />,
    },
    {
      title: "Bug Bounty",
      icon: <FaBug />,
    },
  ];
  return (
    <Box className="bg-[#0e131b] w-full flex justify-center">
      <Grid
        container
        className="w-full max-w-[1120px] h-fit sm:h-72  py-14 px-10 sm:p-20"
      >
        <Grid item xs={12} sm={6} md={8} className="pb-8 sm:pb-0">
          <img src={logo} alt="logo" className="h-12 w-fit" />
          <Typography className="text-white roboto w-full sm:w-1/2 mt-6">
            Your one-stop shop for securing loans with NFTs & earning yields
            instantly
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="flex flex-wrap gap-y-3">
          {links.map((link, i) => (
            <Box key={i} className="flex items-center gap-x-2 w-1/2">
              <span className="text-white text-2xl">{link.icon}</span>
              <Typography className="text-white roboto">
                {link.title}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
