import React from "react";
import { Outlet } from "react-router-dom";

import Top from "../../components/Top";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default () => {
  return (
    <div className="bg-white">
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
