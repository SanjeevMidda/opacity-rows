import { useState, useEffect } from "react";

const Color = ({ delay }) => {
  const randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [rowColor, setRowColor] = useState({
    colorOne: randomColor(),
    colorTwo: randomColor(),
    colorThree: randomColor(),
    transitionDelay: delay,
    opacity: true,
  });

  let rowStyles = {
    backgroundColor: `rgb(${rowColor.colorOne}, ${rowColor.colorTwo}, ${rowColor.colorThree})`,
    transitionDelay: delay,
  };

  let changeColor = () => {
    setRowColor({
      colorOne: randomColor(),
      colorTwo: randomColor(),
      colorThree: randomColor(),
    });
  };

  useEffect(() => {
    setInterval(changeColor, 1400);
  }, []);

  console.log(rowColor);

  return <div className="row" style={rowStyles}></div>;
};

export default Color;
