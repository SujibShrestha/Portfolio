import React, { useEffect, useState } from "react";

const Starbackground = () => {
  const [stars, setStars] = useState([]);
  const [meteor,setMeteor] = useState([]);

useEffect(() => {
    generateStars();
    generateMeteors();

   // re-generate on resize
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: (Math.random() * 4 + 2) + "s",
      });
    }

    setStars(newStars);
  };

    const generateMeteors = () => {
    const numberOfMetoers = 5;
    const newMeteor = [];

    for (let i = 0; i < numberOfMetoers; i++) {
      newMeteor.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: (Math.random() * 3 + 3) + "s",
      });
    }

    setMeteor(newMeteor);
  };


  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
      {meteor.map((meteors) => (
        <div
          key={meteors.id}
          className="meteor animate-meteor"
          style={{
            width: meteors.size*20 + "px",
            height: meteors.size + "px",
            left: meteors.x + "%",
            top: meteors.y + "%",
            animationDelay: meteors.delay,
            animationDuration: meteors.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default Starbackground;
