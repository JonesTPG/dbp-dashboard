import React from "react";
import ChartistGraph from "react-chartist";

const AirQualityAlert = () => {
  var data = {
    labels: ["Room B"],
    series: [[120]],
  };

  var options = {
    high: 150,
    low: 0,
    width: 200,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 2 === 0 ? value : null;
      },
    },
  };

  var type = "Bar";

  return (
    <>
      <div className="row">
        <ChartistGraph
          style={{ width: 200 }}
          data={data}
          options={options}
          type={type}
        />
        <p>Room B has dangerously low air quality.</p>
      </div>
    </>
  );
};

export default AirQualityAlert;
