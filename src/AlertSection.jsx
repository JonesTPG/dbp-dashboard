import React, { useState, useEffect } from "react";
import AirQualityAlert from "./components/AirQualityAlert";

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
    }, 3000);
    setTimeout(() => {
      setAlert3(true);
    }, 6000);
    setTimeout(() => {
      setAlert4(true);
    }, 9000);
  }, []);

  return (
    <>
      <h4>Data Analytics Alerts</h4>
      {alert1 ? <AirQualityAlert></AirQualityAlert> : <p>no alerts</p>}
      {alert2 ? <AirQualityAlert></AirQualityAlert> : null}
      {alert3 ? <AirQualityAlert></AirQualityAlert> : null}
      {alert4 ? <AirQualityAlert></AirQualityAlert> : null}
    </>
  );
};

export default AlertSection;
