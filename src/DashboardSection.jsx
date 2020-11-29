import React from "react";
import AirQualityBar from "./components/AirQualityBar";
import AirQualityLine from "./components/AirQualityLine";
import RenewableAmount from "./components/RenewableAmount";
import RenewableTotal from "./components/RenewableTotal";
import RenewableSeasonal from "./components/RenewableSeasonal";
import WeatherLine from "./components/WeatherLine";

const DashboardSection = () => {
  return (
    <>
      <h3>Renewable Energy Section - Solar Panels</h3>
      <div className="row">
        <RenewableAmount></RenewableAmount>
        <RenewableTotal></RenewableTotal>
      </div>
      <RenewableSeasonal></RenewableSeasonal>
      <h3>Weather Data Section - Amount of sunlight</h3>
      <WeatherLine></WeatherLine>
      <h3>AirQuality Section</h3>
      <AirQualityBar></AirQualityBar>
      <AirQualityLine></AirQualityLine>
    </>
  );
};

export default DashboardSection;
