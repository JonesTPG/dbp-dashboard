import React from "react";
import ChartistGraph from "react-chartist";

const RenewableSeasonal = () => {
  var data = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    series: [
      [94, 60, 30, 55, 60],
      [13, 45, 29, 85, 93],
      [55, 66, 77, 88, 99],
      [67, 12, 89, 23, 43],
    ],
  };

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
      <h4>Renewable</h4>
      <div className="row">
        <ChartistGraph data={data} options={options} type={type} />
        <div>
          <div className="textStyle">Room A</div> <div></div>
          <div className="box red"></div>
          <div className="textStyle">Room B</div> <div></div>
          <div className="box yellow"></div>
          <div className="textStyle">Room C</div> <div></div>
          <div className="box orange"></div>
          <div className="textStyle">Room D</div> <div></div>
          <div className="box lightRed"></div>
        </div>
      </div>
    </>
  );
};

export default RenewableSeasonal;
