import React from "react";

import Starbackground from "../component/Starbackground";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center itms min-w-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background */}
      <Starbackground />

{/* NAVBAR */}
<div className="flex min-h-screen md:w-[40%] w-screen justify-center-safe">

        <Navbar />
         </div>
    </div>
  );
};

export default Home;
