import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";

const RenewableAmount = () => {
  const [value1, setValue1] = useState(70);
  const [value2, setValue2] = useState(54);
  const [value3, setValue3] = useState(45);
  const [value4, setValue4] = useState(37);
  const [value5, setValue5] = useState(62);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1(Math.floor(Math.random() * 101));
      setValue2(Math.floor(Math.random() * 101));
      setValue3(Math.floor(Math.random() * 101));
      setValue4(Math.floor(Math.random() * 101));
      setValue5(Math.floor(Math.random() * 101));

    }, 4000);
    return () => clearInterval(interval);
  }, []);

  var data = {
    labels: ["Floor 56", "Floor 68", "Floor 52", "Floor 49", "Floor 52"],
    series: [[value1, value2, value3, value4, value5]],

  };


  var options = {

    low: 0,

    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 1 === 0 ? value : null;
      },
    },
  };

  var type = "Bar";

  return (
    <>
          <div className="column2">
      <h4>Real time renewable energy / floor</h4>

        <ChartistGraph
          style={{ width: 600 }}
          data={data}
          options={options}
          type={type}
        />
      </div>
    </>
  );
};

export default RenewableAmount;
