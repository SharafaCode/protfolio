import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

import './TextShpere.css'
// Importing TagCloud package
import TagCloud from "TagCloud";


const TextShpere = () => {
  const {themes} = useGlobalContext();
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "Framer",
        "SASS",
        "JS",
        "Reactjs",
        "Firebase",
        "Redux",
        "Style",
        "ES5/ES6",
        "GIT",
        "GITHUB",
        "Taillwind",
        "Gsap",
      ];

      const options = {
        radius: 200,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className=" mt-16 xs:-mt-0 tracking-widest text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className= {`${themes? 'text-text_color' : 'text-primary'} tagcloud capitalize `}></span>
      </div>
    </>
  );
};

export default TextShpere;
