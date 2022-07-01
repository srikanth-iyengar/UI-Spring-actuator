import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { PureComponent } from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import API from "../API";
import { useState, useEffect } from "react";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#7AC142"];

const CarCpu = () => {
  const [cpu, setCpu] = useState({ usage: 0, max: 0 });

  const refreshCpu = () => {
    const cpu_refresh = {};
    API.get("/metrics/system.cpu.usage")
      .then((res) => {
        cpu_refresh["usage"] = res["data"]["measurements"][0]["value"] * 100;
        cpu_refresh["max"] = 100 - cpu_refresh["usage"];
        setCpu(cpu_refresh);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const interval = setInterval(() => refreshCpu(), 6000);
    return () => clearInterval(interval);
  });

  return (
    <Card
      sx={{
        width: 290,
        background: "#191c26",
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <CardContent>
        <PieChart width={240} height={200}>
          <Pie
            data={[
              { name: "Current usage", value: cpu["usage"] },
              { name: "Max usage", value: cpu["max"] },
            ]}
            cx={120}
            cy={200}
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            startAngle={180}
            endAngle={0}
          >
            <Cell key="cell-free" fill={COLORS[3]} />
            <Cell key="cell-total" fill={COLORS[4]} />
          </Pie>
          <Tooltip />
        </PieChart>
        <Typography variant="h6" style={{ marginLeft: 80, color: "white" }}>
          Cpu Usage
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CarCpu;
