import React from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";
import { typewriterStrings } from "../../data/roleContent";

function Type() {
  const { role } = useTheme();
  const strings = typewriterStrings[role] || typewriterStrings.aiml;

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
