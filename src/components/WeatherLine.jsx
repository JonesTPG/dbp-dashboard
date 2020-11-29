import React from "react";
import ChartistGraph from "react-chartist";

const WeatherLine = () => {
  var data = {
    labels: [
      "1.1.",
      "7.1.",
      "14.1.",
      "21.1.",
      "28.1.",
      "4.2.",
      "11.2.",
      "18.2.",
    ],
    series: [[50, 45, 40, 35, 50, 60, 43, 34]],
  };

  var options = {
    high: 100,
    low: 0,
    width: 600,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 1 === 0 ? value : null;
      },
    },
  };

  var type = "Line";
  return (
    <>
      <div className="row">
        <ChartistGraph
          style={{ width: 600 }}
          data={data}
          options={options}
          type={type}
        />
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="textStyle">% of sunlight in a day</div> <div></div>
          <div className="box red"></div>
        </div>
      </div>
    </>
  );
};

export default WeatherLine;
