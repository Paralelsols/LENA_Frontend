import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const MobileDrawer = ({ pages }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex sm:hidden">
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon className="text-white text-2xl" />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="flex sm:hidden"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpen(false)}
          className="flex flex-col items-center px-3 py-6 gap-y-5"
        >
          <img src={logo} alt="logo" className="w-fit h-14 " />
          {pages.map((page, i) => (
            <Link to={page.link} key={i}>
              <Typography key={i} className={`text-lg text-black roboto `}>
                {page.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
