import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "../component/ThemeToggle";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = [
  
    { name: "Projects", to: "/projects" },
      { name: "Contact", to: "/contact" },
  ];

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        // full width on mobile, 50% width on md+, centered with mx-auto
        "fixed min-w-screen md:w-1/2 mx-auto z-40 transition-all duration-200 mt-1",
        isScroll
          ? "py-4 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5"
      )}
    >
 <div className="flex flex-row flex-wrap w-full md:w-[40%] mx-auto items-center justify-between gap-2 px-4">
  {/* Brand */}
  <Link to={'/'} className="text-2xl font-bold text-foreground">
    SUJIB
  </Link>

  {/* Navigation links + Theme Toggle */}
  <div className="flex flex-wrap items-center gap-4">
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.to}
        className="text-foreground/70 hover:text-primary transition-colors duration-200"
      >
        {item.name}
      </Link>
    ))}
    <ThemeToggle />
  </div>
</div>
    </nav>
  );
};

export default Navbar;
