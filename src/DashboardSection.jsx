import React from "react";
import AirQualityBar from "./components/AirQualityBar";
import AirQualityLine from "./components/AirQualityLine";

const DashboardSection = () => {
  return (
    <>
      <AirQualityBar></AirQualityBar>
      <AirQualityLine></AirQualityLine>
    </>
  );
};

export default DashboardSection;
