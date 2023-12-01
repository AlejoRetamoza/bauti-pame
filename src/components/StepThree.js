import React from "react";
import "../assets/css/StepThree.css";

export default function StepThree() {
  const cvu = "0000003100003049661210";

  const copyCVUToClipboard = () => {
    const input = document.createElement("input");
    input.value = cvu;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert(
      "CVU copiado, ya podes pegar el cvu en tu cuenta para transferir dinero!"
    );
  };

  const safePath = require.context("../assets/static/", true);

  const gotoGiftList = () => {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1lrdbjpt-iRLAG9fdSHW-pgu8IXFSN_Ie-3ykB9S59TQ/edit?usp=sharing";
  };

  const sendConfirm = () => {
    let text = "Confirmo la invitación";
    const number = localStorage.getItem("tel");

    window.location.href = `https://wa.me/${number}?text=${text}`;
  };

  return (
    <div className="step-three">
      <div className="card">
        <img src={safePath("./desscode.jpg")} alt="" />
        <p>Dresscode:</p>
        <h2>Elegante Sport</h2>
      </div>
      <div className="card">
        <img src={safePath("./gift.jpg")} alt="" />
        <p>Si deseas hacernos un regalo</p>
        <button className="primary-button" onClick={gotoGiftList}>
          Ver lista
        </button>
      </div>
      <div className="card">
      <img src={safePath("./CBU.jpg")} alt="" />
        <h2>Si deseas colaborar con dinero</h2>
        <p>Cvu: 0000003100003049661210 </p>
        <p>Alias: bautybrieva</p>
        <button className="primary-button" onClick={copyCVUToClipboard}>
          Copiar CVU
        </button>
      </div>
      <div className="step-three-confirm">
        <p>
          Gracias por acompañarnos en este momento tan especial ¡Te esperamos!
        </p>
        <button className="primary-button" onClick={sendConfirm}>
          Confirmar asistencia
        </button>
      </div>
    </div>
  );
}
