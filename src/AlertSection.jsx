import React, { useState, useEffect } from "react";
import AirQualityAlert from "./components/AirQualityAlert";
import BadWeatherAlert from "./components/BadWeatherAlert";
import RenewableAlert from "./components/RenewableAlert";

const AlertSection = () => {
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert1(true);
    }, 1000);
    setTimeout(() => {
      setAlert2(true);
    }, 2000);
    setTimeout(() => {
      setAlert3(true);
    }, 4000);
  }, []);

  return (
    <>
      <h4>Data Analytics Alerts</h4>
      {alert1 ? (
        <div className="air-alert">
          <AirQualityAlert></AirQualityAlert>
        </div>
      ) : (
        <p>no alerts</p>
      )}
      {alert2 ? (
        <div className="weather-alert">
          <BadWeatherAlert></BadWeatherAlert>
        </div>
      ) : null}
      {alert3 ? (
        <div className="renewable-alert">
          <RenewableAlert></RenewableAlert>
        </div>
      ) : null}
    </>
  );
};

export default AlertSection;
