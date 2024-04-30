import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    {
      question: "When is the mint date?",
      answer: "TBA",
    },
    {
      question: "How do I mint a LENA Pass?",
      answer: "Mint it directly on this website",
    },
    {
      question: "What is the mint price?",
      answer: "FREE",
    },
    {
      question: "What utility does the pass have?",
      answer:
        "The memberpass is an upgradable NFT, as the user trade and utilize the protocol on a regular basis, experience points are accumulated. As users accumulate certain amounts of EXP points, NFTs are upgradable to further unlock utility such as $LENA airdrop and early access to our high APY pools. Holders of LENA card will be at the top of the LENA ecosystem as we grow in members, volume, and new innovative products.",
    },
    {
      question: "What chain is the NFT on?",
      answer: "The NFT will be minted on Polygon Mumbai.",
    },
    {
      question: "What is LENA Network?",
      answer:
        "Lending and Earning on Non-fungible Assets (LENA) is the newest protocol that facilitates decentralized and permission-less borrowing & lending of NFT collections, empowering user autonomy. With transparency at the forefront of our design, LENA will also include ETH liquidity pools for staking rewards, borrowing, lending, and more.",
    },
    {
      question: "Is LENA Network safe?",
      answer:
        "LENA Network will be Certik Audited in the future when the platform is ready to ensure we are upholding to the highest standards of safety and security.",
    },
  ];
  return (
    <Box
      id={"faq"}
      className="w-full bg-transparent min-h-screen flex flex-col items-center px-10 sm:px-[24%] py-16"
    >
      <Typography
        sx={{
          color: theme.palette.light,
        }}
        className="press-start mb-8 text-4xl font-semibold capitalize w-full text-center h-fit"
      >
        FAQ
      </Typography>
      <Box
        className="w-full h-fit py-6 px-2 sm:p-6 rounded-3xl"
        sx={{
          backgroundColor: theme.palette.dark,
        }}
      >
        {questions.map((index, i) => (
          <Accordion
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            className={`my-3 rounded-lg shadow-none border-none bg-transparent before:hidden`}
            sx={{ color: theme.palette.light }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: theme.palette.light }}
                  className="bg-transparent rounded-full h-7 w-7"
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ color: theme.palette.light, width: "100%", borderColor: theme.palette.light }}
                className="poppins text-sm font-semibold border-b-2 pb-3"
              >
                {index.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ color: theme.palette.light }}
              className="bg-transparent text-sm poppins py-3 px-5 border-none"
            >
              {index.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
