import ReactECharts from "echarts-for-react";
import React from "react";
import { FC } from "react";

const BarChart: FC<{
    title?: string;
    color?: string;
    statistic: { time: string; value: number }[];
}> = ({ statistic }) => {
    const [source, setSource] = React.useState([]);

    React.useEffect(() => {
        if (statistic) {
            setSource(() => {
                return Object.entries(
                    statistic?.reduce((acc, { time, value }) => {
                        if (acc[time]) {
                            acc[time].push(value);
                        } else {
                            acc[time] = [time, value];
                        }
                        return acc;
                    }, {})
                ).map(([_, values]) => values);
            });
        }
    }, [statistic]);

    const option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: source,
        },
        xAxis: { type: "category" },
        yAxis: {},
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
        series: [{ type: "bar" }, { type: "bar" }],
    };

    return (
        <div>
            <ReactECharts option={option} />
        </div>
    );
};

export default BarChart;
