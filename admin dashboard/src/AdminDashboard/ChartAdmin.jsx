import React from 'react';
import Chart from 'react-apexcharts';

const ChartAdmin = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    const chartConfig = {
        type: 'donut',
        width: 1000,
        height: 380,
        series: [data.orders, data.returns],
        options: {
            labels: ['Total Orders', 'Total Returns'],
            chart: {
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                            },
                        },
                    },
                },
            },
            title: {
                text: 'Orders vs Returns vs Users',
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#00897b', '#ff8f00', '#ff1f23'],
            legend: {
                show: true,
            },
        },
    };

    return (
        <Chart
            className="p-5"
            type={chartConfig.type}
            series={chartConfig.series}
            options={chartConfig.options}
            width={chartConfig.width}
            height={chartConfig.height}
        />
    );
};

export default ChartAdmin;
