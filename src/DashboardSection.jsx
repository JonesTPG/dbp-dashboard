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
      <div className="renewable">
        <h3>Renewable Energy Section - Solar Panels</h3>
        <div className="row">
          <RenewableAmount></RenewableAmount>
          <RenewableTotal></RenewableTotal>
        </div>

        <RenewableSeasonal></RenewableSeasonal>
      </div>
      <div className="weather">
        <h3>Weather Data Section - Amount of sunlight</h3>
        <WeatherLine></WeatherLine>
      </div>
      <div className="air">
        <h3>AirQuality Section</h3>
        <AirQualityBar></AirQualityBar>
        <AirQualityLine></AirQualityLine>
      </div>
    </>
  );
};

export default DashboardSection;
