import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import "chartjs-plugin-stacked100";
import ChartDataLabels from 'chartjs-plugin-datalabels' 
const data = {
  labels: [
    // static certificate names
    "Gets Along with Dogs",
    "Gets Along with Cats",
    "Gets Along with Kids",
    "Are Housebroken"
  ],
  datasets: [
    //static datasets
    {
      label: "Does/Are",
      backgroundColor: "rgba(75,192,192,1)",
      data: [87,50,111,38]
    },
    {
      label: "Does Not/Are Not",
      backgroundColor: "#5c6068",
      data: [49,20,64,20]
    },
    {
      label: "Not Sure",
      backgroundColor: "#d3d3d3",
      data: [25,18,39,56]
    },
    
  ]
};
var options = {
  indexAxis: 'y',
  scales: {
    x: {
      stacked: true,
      ticks:{
        display:false
      }
    },
    y: {
      stacked: true,
      ticks:{
        font:{
          weight: 'bold',
        },
        color:"black",

      },
      
    },
    xAxes:[{
      ticks: {
        callback: function (value, index, values) {
            return value + " %";
        }
    }
    }],
    yAxes: [{
      gridLines: {
        drawBorder: false,
      },
      
    }]
  },
  plugins:{
    ChartDataLabels,
    datalabels: {
      display: true,
      color: "#5c6068",
      formatter: Math.round,
      anchor: "end",
      offset: 0,
      align: "start",
      font: {
          weight: 'bold',
          size: 12,
        }
    },
    legend:{
      position:'bottom',
      labels: {
        font:{
          weight:"bold",
        },
        filter: function(item, chart) {
            // Logic to remove a particular legend item goes here
            return !item.text.includes('dont consider');
        }
    }
    }
  }
};

export default function BarChart(){
  
    return (
      <div>
        <Bar data={data} options={options} plugins={[ChartDataLabels]} height={"100%"}/>
      </div>
    );
  
}
