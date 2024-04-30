import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CollectionCard from "./CollectionCard";

import nft1 from "../../assets/nf-ape.jpg";
import nft2 from "../../assets/nft2.avif";
import nft3 from "../../assets/nft3.avif";
import nft4 from "../../assets/nft4.avif";
import nft5 from "../../assets/nft5.avif";
import nft6 from "../../assets/nft6.png";
import depositBg from "../../assets/depositsbg.png";
import banner2 from "../../assets/banner2.png";

const Collections = () => {
  const theme = useTheme();
  const nfts = [
    {
      image: nft1,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
    {
      image: nft2,
      name: "Meebits",
      size: 19998,
      floorPrice: 1.17,
      borrow: 0.585,
      ratio: "50%",
    },
    {
      image: nft3,
      name: "Mutant Ape Yacht Club",
      size: 19483,
      floorPrice: 4.37,
      borrow: 1.7481,
      ratio: "40%",
    },
    {
      image: nft4,
      name: "The Sandbox",
      size: 165280,
      floorPrice: 0.23,
      borrow: 0.115,
      ratio: "50%",
    },
    {
      image: nft5,
      name: "CryptoPunks",
      size: 9994,
      floorPrice: 59.89,
      borrow: 29.945,
      ratio: "50%",
    },
    {
      image: nft6,
      name: "PLEBE NFT",
      size: Infinity,
      floorPrice: 8.75,
      borrow: 4.375,
      ratio: "50%",
    },
  ];
  return (
    <Box className="h-fit w-full flex flex-col items-center relative py-16 px-6 sm:p-16 collections-bg">
      <Box className="max-w-[1120px]">
        <Box data-aos="fade-left">
          <Typography
            className="poppins text-2xl uppercase press-start"
            sx={{ color: theme.palette.light }}
          >
            Collections
          </Typography>
          <Typography
            className="poppins text-4xl uppercase font-bold press-start"
            sx={{ color: theme.palette.light }}
          >
            To Borrow
          </Typography>
        </Box>
        <Grid container className="pt-14 pb-10">
          {nfts.map((nft, i) => (
            <Grid
              item
              xs={12}
              key={i}
              sm={6}
              md={4}
              className="p-2"
              data-aos="fade-up"
            >
              <CollectionCard nft={nft} />
            </Grid>
          ))}
        </Grid>
        <Grid container className="flex items-center py-5">
          <Grid item xs={12} sm={6} data-aos="fade-left">
            <Typography
              className="poppins text-2xl uppercase press-start"
              sx={{ color: theme.palette.light }}
            >
              DEPOSITS AND BORROW
            </Typography>
            <Typography
              className="poppins text-4xl uppercase press-start font-bold"
              sx={{ color: theme.palette.light }}
            >
              TOTAL VALUE LOCKED
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            data-aos="fade-right"
            className="flex justify-center sm:justify-end sm:pe-5 py-4 sm:py-0"
          >
            <img src={depositBg} alt="bg" className="w-[80%] h-fit" />
          </Grid>
        </Grid>
        <Grid container className="flex items-center py-5">
          <Grid
            item
            xs={12}
            sm={6}
            data-aos="fade-left"
            className="flex justify-center sm:justify-end sm:pe-5 py-4 sm:py-0 pb-5 sm:pb-0"
          >
            <img src={banner2} alt="bg" className="w-[70%] h-fit" />
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-right">
            <Typography
              className="text-2xl uppercase press-start"
              sx={{ color: theme.palette.light }}
            >
              NFT as Collaterals to Borrow
            </Typography>
            <Typography
              className="text-base pt-4 leading-5 poppins"
              sx={{ color: theme.palette.light }}
            >
              Lena is a decentralised peer-to-pool based NFT liquidity protocol.
              Provide your NFTs through the Lena Protocol to obtain an instant
              NFT loan and borrow ETH. Simply maintain the collateral ratio and
              repay back flexibly. Retrieve your NFT back once the loan is
              payed.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Collections;
