import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
            {
                label: 'Biểu đồ cột',
                data: [12, 19, 3],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
