/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Heart from "./pages/Heart";
import HeartAndName from "./pages/HeartAndName";
import LightHeart from "./pages/LightHeart";
import HeartBlom from "./pages/HeartBlom";
import HeartImage from "./pages/HeartImage";

import HeartIcon from "./assets/heart-pulse-solid.svg";

function App() {
  const [step, setStep] = useState(0);
  const handleClick = (e) => {
    setStep(step + 1);
  };
  return (
    <div>
      {(step === 0 || step === 1) && (
        <div>
          <button
            onClick={handleClick}
            style={{
              position: "fixed",
              display: "flex",
              top: "40px",
              left: "40px",
              zIndex: 1,
              backgroundColor: "transparent",
              borderRadius: "25px",
              color: "pink",
              alignItems: "center",
            }}
          >
            click=>
            <img
              style={{
                width: "30px",
                backgroundColor: "red",
                borderRadius: "5px",
              }}
              src={HeartIcon}
            />
          </button>
        </div>
      )}
      {step === 0 ? <Heart /> : step === 1 ? <HeartAndName /> : <HeartImage />}
    </div>
  );
}

export default App;
