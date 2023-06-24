import { Chart } from 'chart.js/auto';

const showChart = (chartData) => {
  const chart = new Chart('myChart', {
    type: 'bar',
    data: {
      labels: Object.keys(chartData),
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: 'brown',
        borderColor: 'black',
        data: Object.values(chartData)
      }]
    },
    options: {
      legend: { display: true }
    }
  });
  return chart;
};

export default showChart;
