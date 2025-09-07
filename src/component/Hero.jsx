import React from "react";
import profileImg from "../assets/pp.jpg";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="md:w-[40vw] min-w-screen flex flex-col">

{/* INFO */}
      <div className="py-5 md:pr-20 flex justify-center md:gap-20 gap-4 items-center md:w-[40vw]">
        <img
          src={profileImg}
          alt="Profile"
          className="w-[70px] h-[70px] rounded-full gradient-border card-hover"
        />
        <div>
          <h3 className="text-2xl md:text-2xl cursor-default font-bold">
            Hey! I am <span className="text-glow">Sujib</span> Shrestha{" "}
            <span className="waving-hand inline-block">👋</span>
          </h3>
          <p className="pt-3 flex gap-1 justify-start text-foreground/70   items-center">
            <MapPin className="h-4 w-4 " />
            Based in Nepal
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
