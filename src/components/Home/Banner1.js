import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import banner from "../../assets/banner3.png";
import StyledButton from "../StyledButton";

const Banner1 = ({ reverse, theme }) => {
  return (
    <Box
      className={`h-fit flex flex-col items-center w-full relative px-8 sm:px-16 ${
        reverse ? "collections-reverse-bg" : "collections-bg"
      } `}
    >
      <Grid container className={`flex items-center py-8 max-w-[1120px]`}>
        <Grid
          item
          xs={12}
          sm={6}
          data-aos="fade-right"
          className="pb-5 sm:pb-0"
        >
          <Typography
            className=" text-xl uppercase press-start"
            sx={{ color: theme.palette.light }}
          >
            FLASH CLAIM
          </Typography>
          <Typography
            className=" text-3xl uppercase  font-bold press-start"
            sx={{ color: theme.palette.light }}
          >
            CLAIM NFT AIRDROPS
          </Typography>
          <Typography
            className="poppins text-base pt-4 pb-6"
            sx={{ color: theme.palette.light }}
          >
            Use your NFT to claim third parties airdrop without repaying back
            the lending pool.
          </Typography>
          <StyledButton title={"Coming Soon"} />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <img src={banner} alt="bg" className="w-full sm:w-[70%] h-fit" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner1;
