import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { PureComponent } from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import API from "../API";
import React from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const CardJvm = () => {
  const [buffer, setBuffer] = useState({used : 0, total : 0});

  const refreshBuffer = () => {
    const buffer_refresh = {};
    API.get("/metrics/jvm.buffer.memory.used")
      .then((res) => {
        buffer_refresh["used"] = res["data"]["measurements"][0]["value"] / 1e3;
        API.get("/metrics/jvm.buffer.total.capacity")
          .then((res) => {
            buffer_refresh["total"] = res["data"]["measurements"][0]["value"] / 1e3;
            setBuffer(buffer_refresh);
          })
          .catch();
      })
      .catch();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshBuffer();
    }, 6000);
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
              { name: "Buffer used", value: buffer["used"] },
              { name: "Buffer total", value: buffer["total"] },
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
            <Cell key="cell-used" fill={COLORS[0]} />
            <Cell key="cell-total" fill={COLORS[2]} />
          </Pie>
          <Tooltip />
        </PieChart>
        <Typography variant="h6" style={{ marginLeft: 76, color: "white" }}>
          Jvm Buffer
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardJvm;
