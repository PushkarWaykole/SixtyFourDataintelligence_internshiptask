import React from "react";


import { Line } from "react-chartjs-2";
import 'chart.js/auto'

var options = {
  elements: {
    point:{
        radius: 0
    }
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    },
    yAxes: [{
      ticks: {
        suggestedMin: 50, // set the minimum value of the y-axis to 20
        beginAtZero: false,
        padding:10
      }
    }],
    xAxes: [{
      categoryPercentage: 0.9, // adjust the width of each category
      barPercentage: 0.8,
      ticks: {
        suggestedMin: 50, // set the minimum value of the y-axis to 20
        beginAtZero: false,
        padding:10,
      }
    }]
  },
  plugins: {
    legend: { display: false, },
  }
}
const data = {
  labels: ["2017", "2018", "2019", "2020", "2022"],
  datasets: [
    {
      label: "First dataset",
      data: [28, 50, 58, 40, 45, 60],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",

    }

  ]
};

export default function LineChart2() {
  return (
    <div >

      <div >

        <Line data={data} height={"180%"} options={options} />
      </div>
    </div>
  );
}