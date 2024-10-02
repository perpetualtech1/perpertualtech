import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TextEffect = ({ texts}) => {
  return (
    <>
          <ReactTypingEffect text={texts} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={10} />
    </>
  );
};

export default TextEffect;
