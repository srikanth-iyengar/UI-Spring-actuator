import React, { PureComponent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Timechart = ({ requests }) => {
  return (
    <div className="body-content--graph">
      <Card
        style={{
          backgroundColor: "#191c26",
          marginLeft: 6.5,
          width: 600,
          minHeight: 300,
        }}
      >
        <CardContent>
          <AreaChart
            width={600}
            height={300}
            data={requests}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="timeTaken"
              stroke="#c9a2d3"
              fill="#782e89"
              style={{ boxShadow: "0 0px 10px #ff653e" }}
            />
          </AreaChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timechart;
