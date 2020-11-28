import React, { useState, useEffect } from "react";
import AirQualityAlert from "./components/AirQualityAlert";
import BadWeatherAlert from "./components/BadWeatherAlert";
import RenewableAlert from "./components/RenewableAlert";

const AlertSection = () => {
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);
  const [alert4, setAlert4] = useState(false);

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
    setTimeout(() => {
      setAlert4(true);
    }, 5000);
  }, []);

  return (
    <>
      <h4>Data Analytics Alerts</h4>
      {alert1 ? <AirQualityAlert></AirQualityAlert> : <p>no alerts</p>}
      {alert2 ? <BadWeatherAlert></BadWeatherAlert> : null}
      {alert3 ? <RenewableAlert></RenewableAlert> : null}
      {alert4 ? <AirQualityAlert></AirQualityAlert> : null}
    </>
  );
};

export default AlertSection;
