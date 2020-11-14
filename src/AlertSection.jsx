import React, { useState, useEffect } from "react";
import AirQualityAlert from "./components/AirQualityAlert";

const AlertSection = () => {
  const [fetched, setFetched] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFetched(fetched + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h4>Data Analytics Alerts</h4>

      {fetched && <AirQualityAlert />}
    </>
  );
};

export default AlertSection;
