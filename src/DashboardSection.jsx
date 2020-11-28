import React from "react";
import AirQualityBar from "./components/AirQualityBar";
import AirQualityLine from "./components/AirQualityLine";
import RenewableAmount from "./components/RenewableAmount";
import RenewableTotal from "./components/RenewableTotal";
import RenewableSeasonal from "./components/RenewableSeasonal";

const DashboardSection = () => {
  return (
    <>
      <h3>Renewable Energy Section</h3>
      <RenewableAmount></RenewableAmount>
      <RenewableTotal></RenewableTotal>
      <RenewableSeasonal></RenewableSeasonal>
      <h3>AirQuality Section</h3>
      <AirQualityBar></AirQualityBar>
      <AirQualityLine></AirQualityLine>
    </>
  );
};

export default DashboardSection;
