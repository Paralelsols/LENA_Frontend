import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import depositBg from "../../assets/banner4.png";
import StyledButton from "../StyledButton";

const Banner = ({ theme }) => {
  return (
    <Box className={`h-fit flex flex-col items-center w-full relative px-8 sm:px-16 collections-bg`}>
      <Grid container className={`flex items-center py-6 max-w-[1120px]`}>
        <Grid item xs={12} sm={6} className="pb-6 sm:pb-0" data-aos="fade-left">
          <img src={depositBg} alt="bg" className="w-full h-fit" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          data-aos="fade-right"
          className="pb-5 sm:pb-0"
        >
          <Typography
            className="text-xl uppercase press-start pb-3"
            sx={{ color: theme.palette.light }}
          >
            Stake Plebe
          </Typography>
          <Typography
            className="text-3xl uppercase text-white font-bold press-start"
            sx={{ color: theme.palette.light }}
          >
            LIQUIDITY MINING
          </Typography>
          <Typography
            className="poppins text-base pt-4 pb-6"
            sx={{ color: theme.palette.light }}
          >
            Plebe stakers earn a instant yield and participate in governance
            process of the platform such as what NFTs supported etc.
          </Typography>
          <StyledButton title={"Coming Soon"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
