import React from "react";
import { Box } from "@mui/material";
import road from "../../assets/roadmap.png";
import roadMob from "../../assets/roadmap-mob.png";

const Roadmap = () => {
  const maps = [
    {
      keys: [
        "Blast Big Bang campaign application accepted",
        "Blast L2 auction and connectivity completed",
        "Launch of $CANDY and Ethereum GameFi & Blue-chip NFT auction launch",
        "Gated access to mainnet private alpha launch",
        "Ethereum lending pool launch of main-net",
      ],
      top: "16vh",
      left: "2vw",
      right: undefined,
      bottom: undefined,
      xl_top: "12vh",
      xl_left: "0vw",
      xl_right: undefined,
      xl_bottom: undefined,
    },
    {
      keys: [
        "Enable more NFT Collateral on blue-chip NFT",
        "LENA NETWORK mainnet beta launch",
        "CEX listing",
        "Receive final report for code audit",
      ],
      top: "53vh",
      left: undefined,
      right: "2vw",
      bottom: undefined,
      xl_top: "32vh",
      xl_left: undefined,
      xl_right: "0vw",
      xl_bottom: undefined,
    },
    {
      keys: [
        "Execute first LENA buyback",
        "Integrate insurance coverage",
        "Additional CEX listings (tier 1 included)",
        "Starting developing LENA v2",
      ],
      top: "88vh",
      left: "2vw",
      right: undefined,
      bottom: undefined,
      xl_top: "52vh",
      xl_left: "0vw",
      xl_right: undefined,
      xl_bottom: undefined,
    },

    {
      keys: [
        "Launch of LENA Network v2",
        "Phase 1 Introduce LENA Marketplace",
        "Enable MorFT trading of NFT & lendNFT positions",
      ],
      top: "120vh",
      left: undefined,
      right: "2vw",
      bottom: undefined,
      xl_top: "72vh",
      xl_left: undefined,
      xl_right: "0vw",
      xl_bottom: undefined,
    },
  ];
  return (
    <>
      <Box className="w-full bg-black hidden sm:flex justify-center items-center">
        <Box
          className="w-full h-[170vh] 2xl:h-screen max-w-[1120px] relative p-14 flex justify-center items-center"
          id="roadmap"
        >
          <img src={road} alt="roadmap" className="h-full w-fit" />
          {maps.map((map, i) => (
            <Box
              className="absolute w-[350px] flex justify-start p-2.5 sm:justify-end"
              sx={{
                top: { xl: map?.xl_top, lg: map.top, md: map.top, sm: map.top },
                bottom: {
                  xl: map?.xl_bottom,
                  lg: map.bottom,
                  md: map.bottom,
                  sm: map.bottom,
                },
                left: {
                  xl: map?.xl_left,
                  lg: map.left,
                  md: map.left,
                  sm: map.left,
                },
                right: {
                  xl: map?.xl_right,
                  lg: map.right,
                  md: map.right,
                  sm: map.right,
                },
              }}
              key={i}
            >
              <ul>
                {map.keys.map((key, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm text-white poppins"
                  >
                    • {key}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className="w-full h-fit relative bg-black py-10 px-3 flex sm:hidden justify-evenly items-center"
        id="roadmap"
      >
        <img className="w-[40%] h-fit" alt="roadmap" src={roadMob} />
        <Box className="w-[60%] h-fit">
          {maps.map((map) => (
            <ul className="pb-2.5" data-aos="fade-up">
              {map.keys.map((key, index) => (
                <li
                  key={index}
                  className="text-xs sm:text-sm leading-4 text-white poppins"
                >
                  • {key}
                </li>
              ))}
            </ul>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Roadmap;
