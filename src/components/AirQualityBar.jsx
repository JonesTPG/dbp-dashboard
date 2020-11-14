import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";

const AirQualityBar = () => {
  const [value1, setValue1] = useState(70);
  const [value2, setValue2] = useState(70);
  const [value3, setValue3] = useState(70);
  const [value4, setValue4] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1(Math.floor(Math.random() * 101));
      setValue2(Math.floor(Math.random() * 101));
      setValue3(Math.floor(Math.random() * 101));
      setValue4(Math.floor(Math.random() * 101));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  var data = {
    labels: ["Room A"],
    series: [[value1]],
  };
  var data2 = {
    labels: ["Room B"],
    series: [[value2]],
  };
  var data3 = {
    labels: ["Room C"],
    series: [[value3]],
  };
  var data4 = {
    labels: ["Room D"],
    series: [[value4]],
  };

  var options = {
    high: 100,
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
      <h4>Real time air quality of different rooms</h4>
      <div className="row">
        <ChartistGraph
          style={{ width: 200 }}
          data={data}
          options={options}
          type={type}
        />
        <ChartistGraph
          style={{ width: 200 }}
          data={data2}
          options={options}
          type={type}
        />
        <ChartistGraph
          style={{ width: 200 }}
          data={data3}
          options={options}
          type={type}
        />
        <ChartistGraph
          style={{ width: 200 }}
          data={data4}
          options={options}
          type={type}
        />
      </div>
    </>
  );
};

export default AirQualityBar;
