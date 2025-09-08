import React from "react";
import profileImg from "../assets/pp.jpg";
import { MapPin } from "lucide-react";
import Tech from "./Tech";
import Resume from "./Resume";

const Hero = () => {
  return (
    <section className="md:w-[40vw]  min-h-screen  flex flex-col">
      {/* INFO */}
      <div className="py-5 md:pr-10 flex justify-center md:gap-20 gap-4 items-center md:w-[40vw]">
        <img
          src={profileImg}
          alt="Profile"
          className="w-[70px] h-[70px] rounded-full gradient-border card-hover"
        />
        <div>
          <h3 className="text-xl md:text-2xl cursor-default font-bold">
            Hey! I'm{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Sujib
            </span>{" "}
            Shrestha <span className="waving-hand inline-block">👋</span>
          </h3>
          <p className="text-xs md:text-sm flex gap-1 justify-start text-foreground/70   items-center">
            <MapPin className="h-4 w-4 " />
            Based in Nepal
          </p>
        </div>

      </div>
<div className="   flex md:justify-start justify-center md:gap-8 flex-col md:w-[40vw]">
  {/* About */}
  <p className="md:text-[16px] text-foreground text-xs">I create websites and good digital experiences.</p>
<Resume/>
</div>

   

<Tech/>
    </section> 
  );
};

export default Hero;
