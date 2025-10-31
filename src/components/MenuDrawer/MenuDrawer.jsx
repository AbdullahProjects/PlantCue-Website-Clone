import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="drawer-section px-4 pt-5">
        <div className="drawer-header flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-primary">Menu</h2>
          <IoMdClose
            className="text-[20px] hover:cursor-pointer"
            onClick={toggleDrawer(false)}
          />
        </div>
        <div className="list-items mt-5">
          <ul className="flex flex-col items-start gap-5 text-[14px] font-medium text-primary">
            <li 
              className="show-cursor hover:text-primary transition-colors" 
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </li>
            <li 
              className="show-cursor hover:text-primary transition-colors" 
              onClick={() => scrollToSection("features")}
            >
              Features
            </li>
            <li 
              className="show-cursor hover:text-primary transition-colors" 
              onClick={() => scrollToSection("about-us")}
            >
              About Us
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="menu-button show-cursor lg:hidden">
      <MdMenu
        className="text-primary text-[30px]"
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
