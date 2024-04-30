import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const CollectionCard = ({ nft }) => {
  const theme = useTheme()
  const properties = [
    {
      title: "Collection Size",
      value: nft.size,
    },
    {
      title: "Floor Price",
      value: nft.floorPrice,
    },
    {
      title: "Available to borrow",
      value: nft.borrow,
    },
    {
      title: "Collateral Ratio",
      value: nft.ratio,
    },
  ];
  return (
    <Box className="w-full h-fit rounded-2xl p-3 pb-5 bg-[#1e242d]">
      <Typography className="press-start text-[10px] mb-3 capitalize text-center" sx={{color: theme.palette.light}}>
        {nft.name}
      </Typography>
      <img
        src={nft.image}
        className="w-full h-fit rounded-2xl"
        alt={nft.title}
      />
      <Box className="flex flex-wrap my-4">
        {properties.map((pro, i) => (
          <Box className="flex flex-col items-center w-1/2 py-2" key={i}>
            <Typography className="text-white font-semibold poppins text-xs">
              {pro.title}
            </Typography>
            <Typography className="text-[#83878c] poppins text-xs">
              {pro.value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography className="text-[#83878c] cursor-pointer text-center poppins text-xs">
        Check the contract
      </Typography>
    </Box>
  );
};

export default CollectionCard;
