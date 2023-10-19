import React from "react";
import "../assets/css/StepThree.css";

export default function StepThree() {

  const cvu = '0000007900209611038608';

  const copyCVUToClipboard = () => {
    const input = document.createElement('input');
    input.value = cvu;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('CVU copiado, ya podes pegar el cvu en tu cuenta para transferir dinero!');
  };

  const safePath = require.context("../assets/static/", true);

  const gotoGiftList = () => {
    alert("Anota tu nombre en el espacio verde junto al regalo desees hacer!");
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1XrzL9sIvVyIV4ngx-YZguexXFqCj-7roApF2k0xmdpg/edit#gid=609351250";
  };

  const sendConfirm = () => {
    let text = "Confirmo la invitación";
    const number = localStorage.getItem("tel");

    window.location.href = `https://wa.me/${number}?text=${text}`;
  };

  return (
    <div className="step-three">
      <div className="step-three-dresscode">
        <p>Dresscode:</p>
        <h2>Formal/Elegante</h2>
        <img src={safePath("./dresscode.png")} alt="" />
      </div>
      <div className="step-three-gift">
        <img src={safePath("./regalo.png")} alt="" />
        <p>Si deseas hacernos un regalo</p>
        <button className="primary-button" onClick={gotoGiftList}>
          Ver lista
        </button>
      </div>
      <div className="step-three-money">
        <h2>Si deseas colaborar con dinero</h2>
        <p>CVU: 0000007900209611038608 </p>
        <p>Alias: EVERTOLEDODUART.UALA</p>
        <button className="secondary-button" onClick={copyCVUToClipboard}>Copiar CVU</button>
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
