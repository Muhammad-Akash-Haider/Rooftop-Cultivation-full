import React from "react";
import Chart from "react-apexcharts";

const ChartAdmin = ({ data }) => {
    // Dynamically constructing the chart series and options
    const chartConfig = {
        type: "donut",
        width: 1000,
        height: 380,
        series: [data.orders, data.returns, data.orders],
        options: {
            labels: ["Total Orders", "Total Returns", "Total Users"],
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
                text: "Orders vs Returns vs Users",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#00897b", "#ff8f00", "#ff1f23"], // Colors for Orders and Returns
            legend: {
                show: true,
            },
        },
    };

    return <Chart className="p-5" {...chartConfig} />;
};

export default ChartAdmin;