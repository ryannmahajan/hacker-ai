import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface BloodReport {
  id: number;
  userId: number;
  reportDate: string;
  hemoglobin: string;
  packedCellVolume: string;
  rbcCount: string;
  mcv: string | null;
  lymphocytesDiff: string | null;
  neutrophils: string | null;
  lymphocytes: string | null;
  summary: string;
}

const BloodReportChart: React.FC = () => {
  const [data, setData] = useState<BloodReport[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('http://13.60.46.23:3000/api/v1/user/fetchbloodreports', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError('Error occurred');
      }
    };

    fetchReports();
  }, []); // No dependencies needed; will only run once when component mounts

  // Prepare data for RBC Count Chart
  const rbcChartData = {
    labels: data.map(report => report.reportDate),
    datasets: [
      {
        label: 'RBC Count',
        data: data.map(report => parseFloat(report.rbcCount)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for Hemoglobin Chart
  const hemoglobinChartData = {
    labels: data.map(report => report.reportDate),
    datasets: [
      {
        label: 'Hemoglobin',
        data: data.map(report => parseFloat(report.hemoglobin)),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for Packed Cell Volume Chart
  const packedCellVolumeChartData = {
    labels: data.map(report => report.reportDate),
    datasets: [
      {
        label: 'Packed Cell Volume',
        data: data.map(report => parseFloat(report.packedCellVolume)),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: any) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        type: 'category' as const,
        labels: data.map(report => report.reportDate),
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        type: 'linear' as const,
        min: 0,
        suggestedMax: Math.max(
          ...data.map(report => Math.max(
            parseFloat(report.rbcCount),
            parseFloat(report.hemoglobin),
            parseFloat(report.packedCellVolume)
          ))
        ) + 10,
      },
    },
  };

  return (
    <div>
      <h2>Blood Report Charts</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div>
            <h3>RBC Count</h3>
            <Bar data={rbcChartData} options={options} />
          </div>
          <div>
            <h3>Hemoglobin Levels</h3>
            <Bar data={hemoglobinChartData} options={options} />
          </div>
          <div>
            <h3>Packed Cell Volume</h3>
            <Bar data={packedCellVolumeChartData} options={options} />
          </div>
        </>
      )}
    </div>
  );
};

export default BloodReportChart;
