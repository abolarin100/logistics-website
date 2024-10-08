import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ students }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy the previous instance
        }
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: students.map(cohort => cohort.cohort),
                datasets: [
                    {
                        label: 'Business Students',
                        backgroundColor: '#127ABB', // Change background color for business students
                        data: students.map(cohort => cohort.businessStudents),
                        borderRadius: {
                            topLeft: 0, // Adjust border radius as needed
                            topRight: 0,
                            bottomLeft: 8,
                            bottomRight: 8
                        }
                    },
                    {
                        label: 'Data Students',
                        backgroundColor: '#BB5312', // Change background color for data students
                        data: students.map(cohort => cohort.dataStudents),
                        borderRadius: {
                            topLeft: 8,
                            topRight: 8,
                            bottomLeft: 0,
                            bottomRight: 0
                        }
                    }
                ]
            },
            options: {
                scales: {
                    x: { 
                        stacked: true,
                        grid: {
                            display: false // Remove vertical grid lines
                        }
                    },
                    y: { 
                        stacked: true,
                        grid: {
                            drawBorder: false // Remove grid line border
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 12 // Adjust font size of legend
                            }
                        }
                    }
                },
                barPercentage: 0.5, // Adjust the width of the bars
                categoryPercentage: 0.3 // Adjust the width of the category groups
            }
        });

        return () => {
            // Clean up the chart instance when the component unmounts
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [students]);

    return <canvas ref={chartRef} />;
};

export default BarChart;
