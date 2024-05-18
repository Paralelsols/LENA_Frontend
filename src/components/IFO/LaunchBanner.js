import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import candy from "../../assets/candy.png";
import bg from "../../assets/candy-wrapper-bg.png";
import StyledButton from "../StyledButton";
import { differenceInSeconds, addDays } from "date-fns";

const LaunchBanner = () => {
  const theme = useTheme();
  
  // Retrieve initial end date from localStorage or set it to 10 days from now
  const storedEndDate = localStorage.getItem("endDate");
  const initialEndDate = storedEndDate ? new Date(storedEndDate) : addDays(new Date(), 10);

  // Calculate the time left based on the initial end date
  const calculateTimeLeft = () => {
    const totalSeconds = differenceInSeconds(initialEndDate, new Date());

    if (totalSeconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Store the initial end date in localStorage
    localStorage.setItem("endDate", initialEndDate);
  }, []);

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
            {[
              { label: "Days", value: timeLeft.days },
              { label: "HRS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds },
            ].map((elem, index) => (
              <React.Fragment key={index}>
                <Box className="sm:h-10 h-6 sm:w-10 w-6 rounded-lg bg-[#47a1ff] flex items-center justify-center text-white poppins text-base sm:text-xl">
                  {elem.value}
                </Box>
                <Typography className="text-xs sm:text-base poppins text-center font-semibold uppercase text-white">
                  {elem.label}
                </Typography>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchBanner;
