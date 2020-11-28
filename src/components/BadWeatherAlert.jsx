import React from "react";
import ChartistGraph from "react-chartist";

const BadWeatherAlert = () => {
  var data = {
    labels: ["1.1.", "7.1.", "14.1.", "21.1."],
    series: [[50, 45, 40, 35]],
  };

  var options = {
    high: 100,
    low: 0,
    width: 300,
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
          style={{ width: 300 }}
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
        <p>
          <br></br>
          <br></br>
          Amount of sunlight is going to drop in the next month. The produced
          renewable energy will reduce by 40%.
        </p>
      </div>
    </>
  );
};

export default BadWeatherAlert;
