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
    if (step === 4) {
      window.location.reload();
    }
    setStep(step + 1);
  };
  return (
    <div>
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
            border: "3px solid",
            borderColor: "white",
            padding: "2px 8px 2px 0"
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
      )
      {step === 0 ? <Heart /> : step === 1 ? <LightHeart /> : step === 2 ? <HeartBlom /> : step === 3 ? <HeartImage /> : <HeartAndName />}
    </div>
  );
}

export default App;
