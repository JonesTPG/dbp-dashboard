import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";

const RenewableTotal = () => {



  const data = {
    labels: ["74%", "26%"],
    series: [80, 20]

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
      <h4>Renewable Total</h4>
        <ChartistGraph data={data} options={options} type={type} />
        </div>
    </>
  );
};

export default RenewableTotal;