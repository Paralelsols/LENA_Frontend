import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import candy from "../../assets/candy.png";
import bg from "../../assets/candy-wrapper-bg.png";
import StyledButton from "../StyledButton";

const LaunchBanner = () => {
  const theme = useTheme();
  return (
    <Box
      className="w-full h-fit md:h-56 lg:h-44 py-5 px-4 sm:px-8 border-2 rounded-2xl border-[#505050] bg-cover bg-no-repeat bg-center flex flex-col sm:flex-row justify-between"
      sx={{ backgroundImage: `url(${bg})` }}
    >
      <Box className="w-full sm:w-1/2 h-full">
        <Box className="flex items-center gap-x-4">
          <img src={candy} alt="candy" className="h-12 w-fit" />
          <Typography className="press-start text-lg sm:text-xl font-semibold capitalize text-white">
            PLEBE Gaming
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
          {/* <Box className="flex text-xs py-1 px-3 rounded-md gap-x-2 font-semibold items-center uppercase poppins bg-[#353648] text-[#fff4ad]">
            <Box className="w-2 h-2 rounded-full bg-[#fff4ad]" />
            Ended
          </Box> */}
        </Box>
        <Typography className="poppins text-sm text-[#cdcccc] mt-4 mb-2">
          Participate and Power Up Your Liquidity with $PLEB
        </Typography>
        <StyledButton title={"Find Out More"} />
      </Box>
      <Box className="w-full sm:w-1/2 h-full mt-8 sm:mt-0 flex justify-center items-center">
        <Box className="w-full h-fit">
          <Typography className="text-base text-left poppins pb-2.5 font-semibold uppercase text-white">
            Time Left
          </Typography>
          <Box className="flex items-center justify-center gap-x-1 sm:gap-x-3">
            {["Days", "HRS", "MINS", "SECS"].map((elem) => (
              <>
                <Box className="sm:h-10 h-6 sm:w-10 w-6 rounded-lg bg-[#47a1ff] flex items-center justify-center text-white poppins text-base sm:text-xl">
                  0
                </Box>
                <Typography className="text-xs sm:text-base poppins text-center font-semibold uppercase text-white">
                  {elem}
                </Typography>
              </>
            ))}
          </Box>
        </Box>
        {/* <Typography className="text-xl press-start text-center font-semibold capitalize text-white">
          Fair Ended
        </Typography> */}
      </Box>
    </Box>
  );
};

export default LaunchBanner;
