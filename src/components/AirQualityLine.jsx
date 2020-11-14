import React from "react";
import ChartistGraph from "react-chartist";

const AirQualityLine = () => {
  var data = {
    labels: ["Room A"],
    series: [[10, 11, 12, 13]],
  };

  var options = {
    high: 100,
    low: 0,
    width: 800,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 2 === 0 ? value : null;
      },
    },
  };

  var type = "Line";

  return (
    <>
      <h4>Air quality of different rooms over time</h4>
      <div className="row">
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    </>
  );
};

export default AirQualityLine;
