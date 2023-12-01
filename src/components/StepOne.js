import React from "react";
import "../assets/css/StepOne.css";

export default function StepOne() {
  const safePath = require.context("../assets/static/", true);
  const gotoCivil = () => {
    window.location.href =
      "https://www.google.com/maps/place/Registro+Civil+Bernal/@-34.7157541,-58.2827684,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32dfcfed50515:0xb79208261ea50d1!8m2!3d-34.7157541!4d-58.2827684!16s%2Fg%2F11c1n360w0?entry=ttu";
  };
  const gotoCeremony = () => {
    window.location.href =
      "https://www.google.com/maps/place/Av.+Dardo+Rocha+1163,+Bernal+Oeste,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95a3320ab9959dc3:0xd19b2514b04dce7b?sa=X&ved=2ahUKEwi6yPvKm-2CAxWkkZUCHdvkBgwQ8gF6BAgKEAA";
  };
  const gotoParty = () => {
    window.location.href =
      "https://www.google.com/maps/place/Calle+404+esq+197+Arturo+Segui,+La+Plata/@-34.9060868,-58.1669044,3a,75y,42.4h,90t/data=!3m4!1e1!3m2!1sKBuE_53-fZNTK3JW1JqOWg!2e0!4m2!3m1!1s0x95a2d9f32c4bfdb5:0xbe82ff2e1093d53?sa=X&ved=2ahUKEwiWhfK7nO2CAxWeqJUCHY-KBo0QxB16BAgOEAA";
  };
  return (
    <div className="civil-content">
      <div className="card">
      <img src={safePath("./civil.jpg")} alt="" />
        <h2>Civil</h2>
        <p>5 de enero a las 8:20 horas en "Registro civil de Bernal"</p>
        <button className="primary-button" onClick={gotoCivil}>
          Cómo llegar
        </button>
      </div>
      <div className="card">
        <img src={safePath("./ceremonia.jpg")} alt="" />
        <h2>Ceremonia</h2>
        <p>7 de enero a las 10:00 horas en Av. Dardo Rocha 1163</p>
        <button className="primary-button" onClick={gotoCeremony}>
          Cómo llegar
        </button>
      </div>
      <div className="card">
      <img src={safePath("./fiesta.jpg")} alt="" />
        <h2>Fiesta</h2>
        <p>
          7 de enero a las 12:30 horas en "Lapen" Calle 404 esq 197 Arturo
          Segui, La Plata
        </p>
        <button className="primary-button" onClick={gotoParty}>
          Cómo llegar
        </button>
      </div>
    </div>
  );
}
