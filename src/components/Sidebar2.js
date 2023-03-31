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
    maintainAspectRatio: false,
      scales: {
          x: {
              gridLines: {
                  display:false
              },
              barThickness: 10,
            grid: {
              display: false
            },
            ticks:{
              display:false
            },
            position:'right',
            beginAtZero: true,
          },
          y: {
            ticks:{
              font:{
                weight: 'bold',
              },
              color:"black",
  
            },
              gridLines: {
                  display:false
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
            display: true,
            color: "black",
            formatter: Math.round,
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

const labels = ['Labrador ', 'Pit', 'Hound','Shepard','Terier','American','Catahoula','Hounds','Australian','Mountain'];

export const data = {
  labels,
  datasets: [
    {
      data: [1422,838,400,376,306,157,155,150,126,108],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,1)',
      datalabels:{
        color:'black'
      },
      barThickness: 15,
      barPercentage:0.9,
      categoryPercentage:1,
      borderWidth:1,
      width:200
    },
    
  ],
};

export default function Sidebar1() {
  return (

    <div className='w-[25rem]'>

  <Bar options={options} height={"220%"}data={data} plugins={[ChartDataLabels]}/>
  </div>
  );
}
