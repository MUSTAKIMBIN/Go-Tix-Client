import React from "react";
import Navber from "../../Components/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      {/* main RootLayout pages */}
      {/* added basics file setpus and router sertpus */}
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
