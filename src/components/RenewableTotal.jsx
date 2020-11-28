import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";

const RenewableTotal = () => {
  const [value1, setValue1] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1(Math.floor(Math.random() * 100));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: [value1 + "%",],
    series: [value1]
  }


  const options ={
    donut: true,
    donutWidth: 25,
    startAngle: 360,
    total: 100,
    labelOffset: 30,
  
  }
  
  var type = "Pie";


  return (
    <>
    <div className="column3">
      <h4>Total renewable energy</h4>
        <ChartistGraph data={data} options={options} type={type} />
        </div>
    </>
  );
};

export default RenewableTotal;