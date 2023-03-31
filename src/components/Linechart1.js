import React from "react";


import { Line } from "react-chartjs-2";


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
      },
      ticks: {
        beginAtZero:true,
        callback: function(value, index, values) {
                return value + 'K';
        }
    },
    },
  },
  plugins: { legend: { display: false, }, 
  }
}
const data = {
  labels: ["2014", "2016", "2018", "2020", "2022"],
  datasets: [
    {
      label: "First dataset",
      data: [2.2,3.2,4.8,8.5,11],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4
    }
    
  ]
};

export default function App() {
  return (
    <div >
      
      <div className="m-auto relative h-[300px] w-[25vw] border border-gray-300 border-3 mt-8" >

      <Line data={data} options={options}/>
      </div>
    </div>
  );
}