import React from "react";
import "../assets/css/Counter.css";
import { useEffect } from "react";

export default function StepOne() {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  const getDiff = () => {
    let startDate = new Date();
    let endDate = new Date("2024-01-07T12:00:00");

    let diff = endDate.getTime() - startDate.getTime();

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    if (days < 10) days = "0" + days;
    hours = hours % 24;
    if (hours < 10) hours = "0" + hours;
    minutes = minutes % 60;
    if (minutes < 10) minutes = "0" + minutes;
    seconds = seconds % 60;
    if (seconds < 10) seconds = "0" + seconds;

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    getDiff();
    setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
            }
          }
        }
      }
    }, 1000);
  });

  const safePath = require.context("../assets/static/", true);

  return (
    <>
      <div className="counter">
        <div>
          <span className="number">{days}</span>
          <span className="desciption">Días</span>
        </div>
        <div>
          <span className="number">{hours}</span>
          <span className="desciption">Horas</span>
        </div>
        <div>
          <span className="number">{minutes}</span>
          <span className="desciption">Minutos</span>
        </div>
        <div>
          <span className="number">{seconds}</span>
          <span className="desciption">Segundos</span>
        </div>
      </div>
      <div className="img-container">
        <div className="img">
          {" "}
          <img src={safePath("./corazon.svg")} alt="" />
        </div>
        <div className="text">
          <p>
            Cnt 8:7: "Las muchas aguas no podrán apagar, el amor, Ni lo
            ahogarán los ríos…”
          </p>
        </div>
      </div>
    </>
  );
}
