import ReactECharts from "echarts-for-react";
import React from "react";
import { FC } from "react";

const LinerChart: FC<{
    title: string;
    color: string | null;
    statistic: { time: string; value: number }[];
}> = ({ title = "", color, statistic }) => {
    const date = [];
    const value = [];

    statistic?.forEach((chart) => {
        if (chart.time && chart.value) {
            date.push(chart.time);
            value.push(chart.value.toFixed(2));
        }
    });

    const option = {
        tooltip: {
            trigger: "axis",
            position: function (pt) {
                return [pt[0], "10%"];
            },
        },
        title: {
            left: "center",
            text: title,
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: "none",
                },
                restore: {},
                saveAsImage: {},
            },
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: date,
        },
        yAxis: {
            type: "value",
            boundaryGap: [0, "100%"],
        },
        dataZoom: [
            {
                type: "inside",
                start: 0,
                end: 10,
            },
            {
                start: 0,
                end: 10,
            },
        ],
        series: [
            {
                name: "name",
                type: "line",
                symbol: "none",
                sampling: "lttb",
                itemStyle: {
                    color: color || "red",
                },
                areaStyle: {
                    color: color || "red",
                },
                data: value,
            },
        ],
    };

    return (
        <div>
            <ReactECharts option={option} />
        </div>
    );
};

export default LinerChart;
