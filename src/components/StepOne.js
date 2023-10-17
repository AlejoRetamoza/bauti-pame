import React from "react";
import "../assets/css/StepOne.css";

export default function StepOne() {
  const gotoCivil = () => {
    window.location.href =
      "https://www.google.com/maps/place/Registro+Civil+Bernal/@-34.7157541,-58.2827684,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32dfcfed50515:0xb79208261ea50d1!8m2!3d-34.7157541!4d-58.2827684!16s%2Fg%2F11c1n360w0?entry=ttu";
  };
  const gotoParty = () => {
    window.location.href =
      "https://www.google.com/maps/place/Pampa+Simplemente+Campo/@-34.8861103,-58.2771985,15z/data=!4m6!3m5!1s0x95a2d674d7ae2c45:0xdf2f567b91779668!8m2!3d-34.8861103!4d-58.2771985!16s%2Fg%2F11dz1ls2ld?entry=ttu";
  };
  return (
    <div className="civil-content">
      <div>
        <h2>Civil</h2>
        <p>
          El civil se realizara el dia 24 de noviembre a las 9:50hs en el
          registro civil de bernal
        </p>
        <button className="primary-button" onClick={gotoCivil}>
          Cómo llegar
        </button>
      </div>
      <div>
        <h2>Ceremonia y fiesta</h2>
        <p>
          Celebramos nuestro casamiento el 26 de noviembre de 13:00 a 20:00 hs
          en "Pampa, simplemente campo", Florencio Varela. ¡Te esperamos!
        </p>
        <button className="primary-button" onClick={gotoParty}>
          Cómo llegar
        </button>
      </div>
    </div>
  );
}
