import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
 
  scale: {
    pointLabels: {
      fontStyle: "bold",
    }
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      /* For changing color of x-axis coordinates */
      ticks: {
        fontSize: 18,
        padding: 0,
        fontColor: 'red',
        callback: function (dataLabel, index) {
          // Apply logic to remove name of the month
          return dataLabel + "days"
        }
      }
    }],
    yAxes: [{
      /* For changing color of x-axis coordinates */
      ticks: {
        fontSize: 18,
        padding: 0,
        fontColor: 'red',
        callback: function (dataLabel, index) {
          // Apply logic to remove name of the month
          return dataLabel + "days"
        }
      }
    }],
    x: {
      gridLines: {
        display: false
      },
      barThickness: 10,
      grid: {
        display: false
      },
      ticks: {
        display: false,
        font: {
          weight: 'bold',
        },
        callback: function(label) {
          return `\$${this.getLabelForValue(label)} days`
        }

      },
      position: 'right',
      beginAtZero: true,
    },
    y: {
      ticks: {
        font: {
          weight: 'bold',
        },
        color: "black",

      },
      gridLines: {
        display: false
      },
      barThickness: 10,
      grid: {
        display: false
      },
      position: 'top',
      beginAtZero: true,
    },
  },
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      callbacks: {
        label: (item) =>
          `${item.label}: days`,
      },
      display: true,
      color: "black",
      formatter: Math.round+"days",
      anchor: "end",
      offset: -30,
      align: "start",
      font: {
        weight: 'bold',
        size: 12,
      }
    },
    legend: {
      display: false
    },
    ChartDataLabels,
  },
};

const labels = ['0-1 Puppy ', '2-6 Adult', '7+ Senior'];

export const data = {
  labels,
  fontStyle: "bold",
  datasets: [
    {
      data: [30, 85, 103],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,1)',
      datalabels: {
        color: 'black'
      },
      barThickness: 15,
      barPercentage: 0.9,
      categoryPercentage: 1,
      borderWidth: 1,
      width: 200
    },

  ],
};

export default function Sidebar1() {
  return (

    <div >

      <Bar options={options} height={"70%"} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}
