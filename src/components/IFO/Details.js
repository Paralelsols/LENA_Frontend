import React from "react";
import { Box, Typography } from "@mui/material";
import coin from "../../assets/details.png";

const Details = () => {
  return (
    <Box className="w-full min-h-screen py-5 px-8 mb-10 overflow-x-hidden rounded-md bg-[#0e131c]">
      <Typography className="text-white font-semibold text-xl poppins">
        Fair Launch Detail
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Token: $CANDY
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Token Address: 0x55d6995b0e9b8a981b8a853D2C0BC0E6311a0073
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Fair Contract Address: 0x56fA0B50F3e35CD629AE5BC6E2CD6E68D0977AB8
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Fair Contract Address: 0x56fA0B50F3e35CD629AE5BC6E2CD6E68D0977AB8
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Start Date and Time: TBC
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Price per Token
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Private Phase:
        0.00020 ETH per token
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Whitelist Phase:
        0.00025 ETH per token
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Public Phase:
        0.00030 ETH per token
      </Typography>
      <Typography className="text-white font-semibold pt-12 text-xl poppins">
        Fairness
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        Fairness is at the core of our IFO process. We believe in providing
        equal opportunities for all participants to acquire $CANDY tokens,
        ensuring a level playing field and fostering a vibrant and inclusive
        community.
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        In our commitment to fairness, we have implemented the following
        measures:
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Allocation
        Mechanics: individual contribution limits and token availability,
        ensuring that each participant receives a fair share of $CANDY tokens
        based on their contribution.
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Anti-Bot Measures:
        prevent unfair advantages and ensure that the IFO process remains
        accessible to genuine participants.
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Transparency and
        Security: We prioritize transparency and security throughout the IFO
        process. Our documents provide clear and comprehensive information about
        the IFO process, token distribution, and vesting schedules.
      </Typography>
      <Typography className="text-white font-semibold text-xl poppins pt-12">
        What makes us unique?
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        LENA Network has established itself as a cutting-edge DeFi protocol that
        seamlessly merges NFT finance, RWA finance, collateralized lending, and
        borrowing. What sets LENA apart is its unique focus on long-tail assets
        within the NFT market, complemented by an open and permissionless
        design. By also seamlessly integrating RWA USD pools into its ecosystem,
        LENA Network broadens its range of services and builds a bridge
        connecting traditional assets with the decentralized realm.
      </Typography>
      <Typography className="text-white font-semibold text-xl poppins pt-12">
        Who's behind LENA?
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        LENA is founded by an experienced team of leading industry professionals
        from traditional and decentralized finance, with decades of experience
        across the board from recognized organisations. LENA is backed by some
        of the industry’s thought leaders and visionaries such as DWF Labs,
        Alchemy Pay etc.
      </Typography>
      <Typography className="text-white font-semibold text-xl poppins pt-12">
        What is $LENA Token?
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        $LENA is our ecosystem token, we can reward protocol participants and
        supporters for bootstrapping the ecosystem through platform revenue
        share. Additionally, $LENA will serve as a token for protocol governance
        for key parameter changes driven by the community. $LENA is a
        multilayered utility token with protocol revenue share, token vesting
        incentives, volatility risk premium, and many other more. You may refer
        to our docs for more info:
        <br />
        https://docs.lena.network/tokenomics/token-utility
      </Typography>
      <Box className="w-full h-fit flex justify-center items-center my-8">
        <img className="h-56 w-fit" src={coin} alt="coin details" />
      </Box>
      <Typography className="text-white font-semibold text-xl poppins">
        What is $CANDY Token?
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        In a token of gratitude to our loyal testnet v.1 participants and
        community members, we’re proposing to issue a new coin, $CANDY. It’s a
        way for us to give back to our community members and incentivize their
        continued participation. $CANDY will be airdropped based on each
        member’s current $LENA allocation. The CANDY airdrop will reward early
        users and supporters of the protocol. Our leaderboards transparently
        displays the amount of CANDY you will be receiving. Stay tuned to our
        socials for more details.
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> $CANDY holders can
        then convert 1:1 to $LENA
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> You will be able
        to utilize $CANDY on LENA’s platform such as bidding on NFTs in our
        auction marketplace.
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2 flex items-center gap-x-2">
        <Box className="w-2 h-2 bg-[#ce5787] rounded-full" /> Enjoy early-access
        perks to upcoming events and features
      </Typography>
      <Typography className="text-white font-semibold pt-12 text-xl poppins">
        What is our auction event?
      </Typography>
      <Typography className="text-[#b9bbbd] text-sm poppins pt-2">
        To celebrate LENA’s journey, our auction event will give users the
        chance to bid on blue-chip NFTs using their $CANDY. We plan to acquire a
        variety of blue-chip NFTs, including Sandbox LAND, lil pudgys,
        Moonbirds, MAYC, BEANZ, and BTC-20 NFTs to be bridged to our auction
        platform in the future.
        <br />
        Read more on how the auction event will work:
        https://medium.com/@LENA_Network/introducing-candy-and-nft-auctions-3803945741ca
      </Typography>
    </Box>
  );
};

export default Details;
