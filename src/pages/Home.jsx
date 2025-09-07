import React from "react";

import Starbackground from "../component/Starbackground";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center itms min-w-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background */}
      <Starbackground />


<div className="flex min-h-screen md:w-[40%] w-screen justify-center-safe">
  {/* NAVBAR */}
        <Navbar />
 {/* HERO */}
<main className="py-20 md:w-[40vw]">
  <Outlet/>
</main>

         </div>
    </div>
  );
};

export default Home;
