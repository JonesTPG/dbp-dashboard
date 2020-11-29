import React from "react";
import ChartistGraph from "react-chartist";

const RenewableAlert = () => {
  var data = {
    labels: ["1.1.", "2.1.", "3.1.", "4.1."],
    series: [[300, 250, 320, 0, 0]],
  };

  var options = {
    high: 400,
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
          <div className="textStyle">Produced energy in a day (MegaJoule)</div>
          <div></div>
          <div className="box red"></div>
        </div>
        <p>
          <br></br>
          <br></br>
          Solar panel at Room 364 has not been producing energy in the last 2
          days. The panel might be broken.
        </p>
        <img alt="skyscraper image" src="img/skyscraper.png"></img>
      </div>
    </>
  );
};

export default RenewableAlert;
