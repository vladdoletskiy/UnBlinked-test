import ReactECharts from "echarts-for-react";
import React from "react";
import { FC } from "react";

const DoughnutChart: FC<{
    title: string;
    data: { value: number };
}> = ({ title, data }) => {
    const option = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            top: "5%",
            left: "center",
        },
        series: [
            {
                name: title,
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data: data,
            },
        ],
    };

    return (
        <div>
            <ReactECharts option={option} />
        </div>
    );
};

export default DoughnutChart;
