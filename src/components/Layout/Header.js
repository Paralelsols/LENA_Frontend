import React, { useState , useEffect} from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import MobileDrawer from "./MobileDrawer";
import { Link, useLocation } from "react-router-dom";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount , useConnect , useDisconnect  } from "wagmi";

const Header = () => {
  const [active, setActive] = useState(0);
  const { pathname } = useLocation();
  const { open } = useWeb3Modal()

  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  useEffect(()=>{
    if(isConnected){
      console.log("Wallet Connect with yhtis address ===>" , address)
    }else{
      console.log("Wallet Disconnect with yhtis address ===>" , address)
    }
  },[address, isConnected])


  const pages = [
    { name: "Home", link: "/" },
    { name: "Mint", link: "/mint" },
    { name: "Utility", link: "/mint#utility" },
    { name: "Leaderboard", link: "/mint#leaderboard" },
    { name: "FAQ", link: "/mint#faq" },
    { name: "Roadmap", link: "/#roadmap" },
    { name: "Docs", link: "/docs" },
  ];
  return (
    <Box className="w-full header-bg fixed z-50 flex justify-center">
      <Box className="w-full 2xl:max-w-[1120px] h-16 flex items-center sm:justify-center px-2.5 sm:px-6">
        <MobileDrawer pages={pages} />
        <img
          src={logo}
          alt="logo"
          className="w-fit h-10 ms-4 sm:ms-0 "
        />
        <Box
          className={`${
            pathname === "/ifo" ? "hidden" : "flex"
          } justify-center w-full`}
        >
          <Box className={`justify-center gap-x-12 hidden sm:flex `}>
            {pages.map((page, i) => (
              <Link key={i} className="text-white no-underline" to={page.link}>
                <Typography
                  className={`text-base hover:border-b-2 border-white hover:-mb-1 text-white roboto ${
                    active === i && "border-b-2 -mb-1"
                  }`}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
             {/* <Box>
              <w3m-button />
            </Box> */}
        <Box
          className={`${
            pathname !== "/ifo" ? "hidden" : "flex"
          } w-full h-fit flex justify-end items-center`}
        >
          {/* <Box className="rounded-full border border-[#cdcccc] px-2 py-1 flex items-center gap-x-1">
            <Box className="bg-[#85e2ef] rounded-full w-3 h-3" />
            <Typography className="text-white poppins text-xs sm:text-sm">
              de322dbc...a6461ec
            </Typography>
          </Box> */}
          {/* <Button className="bg-[#47a1ff] text-white rounded-full py-2 px-4 capitalize poppins ">
            Connect Wallet
          </Button> */}
                  <w3m-button />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
