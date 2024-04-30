import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

//pages
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import IFO from "./pages/IFO";
import Auction from "./pages/Auction";

//components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToHashElement from "./components/Layout/ScrollToHash";
// import Referral from "./components/Referral/Referral";
import { ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      main: "#0844a4",
      dark: "#000000",
      light: "#ffffff",
    },
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
      <Router>
        <ScrollToHashElement />
        <Header />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/ifo" element={<IFO />} />
            <Route path="/auction" element={<Auction />} />
          </Routes>
        </ThemeProvider>
        <Footer />
      </Router>
  );
};

export default App;
