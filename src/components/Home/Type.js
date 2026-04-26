import React from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";

function Type() {
  const { role } = useTheme();

  const strings = role === "ds"
    ? ["Data Scientist", "Data Analyst", "Business Intelligence Specialist", "ML Engineer"]
    : ["AI/ML Engineer", "Deep Learning Researcher", "Data Analyst", "Computer Vision Enthusiast"];

  return (
    <Typewriter
      key={role}
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
