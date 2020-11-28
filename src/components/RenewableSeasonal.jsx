import React from "react";
import ChartistGraph from "react-chartist";

const RenewableSeasonal = () => {
  var data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
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
      <h4>Renewable energy of different floors over time</h4>
      <div className="row">
        <ChartistGraph data={data} options={options} type={type} />
        <div>
          <div className="textStyle">Floor 54</div> <div></div>
          <div className="box red"></div>
          <div className="textStyle">Floor 42</div> <div></div>
          <div className="box yellow"></div>
          <div className="textStyle">Floor 67</div> <div></div>
          <div className="box orange"></div>
          <div className="textStyle">Floor 63</div> <div></div>
          <div className="box lightRed"></div>
        </div>
      </div>
    </>
  );
};

export default RenewableSeasonal;
