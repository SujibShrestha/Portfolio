import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const storeItem =localStorage.getItem('theme')
    if(storeItem == 'dark'){document.documentElement.classList.add("dark");
        setDarkMode(true)}
    else{document.documentElement.classList.remove("dark");
        setDarkMode(false)}
  },[])

  const toggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    localStorage.setItem('theme','light')
      setDarkMode(false);
    } else {document.documentElement.classList.add("dark");
    localStorage.setItem('theme','dark')
    setDarkMode(true);}
  };

  return (
    <button onClick={toggle} className={cn(
  '     z-50 p-2 rounded-full transition-colors duration-300',
  'focus:outline-hidden'
)}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
