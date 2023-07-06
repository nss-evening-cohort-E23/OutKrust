import { Chart } from 'chart.js/auto';

let chart = null;
const showChart = (chartData) => {
  if (chart) {
    chart.clear();
    chart.destroy();
  }
  chart = new Chart('myChart', {
    type: 'bar',
    data: {
      labels: Object.keys(chartData),
      datasets: [{
        label: 'Revenue Chart',
        data: Object.values(chartData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
      }]
    },
    options: {
      legend: { display: true }
    }
  });
  return chart;
};

export default showChart;
