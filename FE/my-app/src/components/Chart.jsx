import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js'; // Import necessary elements and scales
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-luxon';

Chart.register(
  ArcElement,
  CategoryScale, // Register CategoryScale
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const ChartComponent = () => {
  // Dummy data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      tension: 0.1
    }]
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
