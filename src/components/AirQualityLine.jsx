import React from "react";
import ChartistGraph from "react-chartist";

const AirQualityLine = () => {
  var data = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    series: [
        [94, 60, 30, 55, 60],
        [13, 45, 29, 85, 93],
        [55, 66, 77, 88, 99],
        [67, 12, 89, 23, 43]
      ]
    }

  var options = {
    high: 100,
    low: 0,
    width: 800,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 1 === 0 ? value : null;
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
