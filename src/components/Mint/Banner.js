import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import depositBg from "../../assets/depositsbg.png";
import StyledButton from "../StyledButton";

const Banner = ({ reverse, id }) => {
  const theme = useTheme();
  return (
    <Box
      id={id}
      className={`h-fit w-full relative px-16 ${
        reverse ? "collections-reverse-bg" : "collections-bg"
      } `}
    >
      <Grid
        container
        className={`flex items-center ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Grid item xs={12} sm={6}>
          <img src={depositBg} alt="bg" className="w-full h-fit" />
        </Grid>
        <Grid item xs={12} sm={6} className="pb-5 sm:pb-0">
          <Typography
            className="press-start text-xl uppercase py-2"
            sx={{
              color: theme.palette.light,
            }}
          >
            PLEBE PREMIER CARD
          </Typography>
          <Typography className="poppins text-sm text-white py-2">
            The NFT will act as the access pass for test net, and serve as the
            proof of early network participation. Holders of PLEBE card will be
            at the top of the PLEBE ecosystem as we grow in members, volume, and
            new innovative products.
          </Typography>
          <Typography className="poppins text-sm text-white py-2">
            Your member pass will exist on the testnet first. As you continue to
            interact with the PLEBE Network's contract, your member pass would
            level up. Each level will be entitled to different benefits on the
            PLEBE Network, including and not limited to token airdrop.
          </Typography>
          <Box className="pt-6">
            <StyledButton title={"Read Whitepaper"} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
