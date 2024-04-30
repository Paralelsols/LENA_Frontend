import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StyledButton from "../StyledButton";

import nft from "../../assets/nft.png";
import shadow from "../../assets/wrap-6.png";
import wrap1 from "../../assets/wrap-1.png";
import wrap2 from "../../assets/wrap-2.png";
import wrap4 from "../../assets/wrap-4.png";
import tagBG from "../../assets/tag-bg.png";
import logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";

const Wrapper = ({ theme }) => {
  return (
    <Grid
      container
      className="w-full max-w-[1120px] h-fit pt-28 mt-0 md:mt-32 lg:mt-16 sm:py-0 sm:h-[120vh] 2xl:h-[70vh] px-5 md:px-[4%] lg:px-[9%] 2xl:px-0 pb-[7%]"
    >
      <Grid
        item
        xs={12}
        sm={6}
        className="h-[70%] w-full"
        data-aos="fade-right"
      >
        <Box className="w-full h-full p-0 sm:p-5 flex flex-col justify-end gap-y-4">
          <Typography className="poppins text-sm uppercase text-white">
            Plebe Gaming
          </Typography>
          <Box className="flex items-center ">
            <Typography className="press-start text-4xl font-semibold capitalize text-white">
              Next level NFT Gaming
            </Typography>
            <Box
              className="flex text-xs py-1 px-3 rounded-full gap-x-2 font-semibold items-center uppercase poppins"
              sx={{
                backgroundColor: theme.palette.dark,
                color: theme.palette.light,
              }}
            >
              <Box
                className="w-2 h-2 rounded-full"
                sx={{
                  backgroundColor: theme.palette.main,
                }}
              />
              End
            </Box>
          </Box>
          <Typography className="poppins text-sm text-white">
            Participate and Power Up Your Liquidity with $PLEB
          </Typography>
          <Box className="h-fit gap-y-10 w-fit bg-transparent flex flex-col justify-between mt-6">
            <Link to="/ifo">
              <StyledButton title={"Claim IFO Token"} />
            </Link>
            <Link to="/auction">
              <StyledButton title={"Auction & Airdrop"} />
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        data-aos="fade-left"
        className="h-[70%] w-full flex items-end md:items-center lg:items-end justify-center relative"
      >
        <Box className="h-[80%] max-h-[450px] w-fit nft-animation relative">
          <img className="h-full w-fit" alt={"nft"} src={nft} />
          <img
            className="absolute bottom-0 w-[105%] h-fit"
            src={shadow}
            alt="shadow"
          />
          <img
            className="absolute top-[20%] h-24 -left-6 w-fit"
            src={wrap1}
            alt="shadow"
          />
          <img
            className="absolute top-[8%] h-24 right-0 w-fit"
            src={wrap2}
            alt="shadow"
          />
          <img
            className="absolute bottom-[25%] h-24 left-0 w-fit"
            src={wrap4}
            alt="shadow"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        className="h-[18%] w-full ps-0 sm:ps-14 pe-0 sm:pe-2.5 py-2.5 sm:py-0"
      >
        <Link to="/ifo">
          <Box
            className="w-full h-full relative border ps-8 border-white rounded-md bg-no-repeat bg-cover bg-left flex items-center"
            sx={{ backgroundImage: `url(${tagBG})` }}
          >
            <img className="h-[75%] w-fit" src={logo} alt="logo" />
            <Box className="px-3 py-1 bg-[#2f2f3f] rounded-full text-white poppins uppercase text-xs absolute top-5 right-5">
              Ended
            </Box>
          </Box>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        className="h-[18%] w-full pe-0 sm:pe-14 ps-0 sm:ps-2.5 py-2.5 sm:py-0"
        data-aos="fade-up"
      >
        <Link to="/auction">
          <Box
            className="w-full h-full relative border ps-8 border-white rounded-md bg-no-repeat bg-cover bg-left flex items-center"
            sx={{ backgroundImage: `url(${tagBG})` }}
          >
            <img className="h-[75%] w-fit" src={logo} alt="logo" />
            <Box className="px-3 py-1 bg-[#2f2f3f] rounded-full text-white poppins uppercase text-xs absolute top-5 right-5">
              Ended
            </Box>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Wrapper;
