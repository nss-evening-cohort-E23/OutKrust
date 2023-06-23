import { Chart } from 'chart.js/auto';

const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

const showChart = () => {
  const chart = new Chart('myChart', {
    type: 'line',
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgb(49, 37, 9)',
        borderColor: 'rgb(49, 37, 9)',
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      }
    }
  });
  return chart;
};

export default showChart;
