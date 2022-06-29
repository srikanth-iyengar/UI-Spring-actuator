import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { PureComponent } from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import API from "../API";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class CardJvm extends PureComponent {
  state = {
    buffer: {},
  };

  componentDidMount() {
    this.interval = setInterval(() => this.refreshBuffer(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  refreshBuffer = () => {
    const buffer = {};
    API.get("/metrics/jvm.buffer.memory.used").then((res) => {
      buffer["used"] = res["data"]["measurements"][0]["value"] / 1e3;
      API.get("/metrics/jvm.buffer.total.capacity").then((res) => {
        buffer["total"] = res["data"]["measurements"][0]["value"] / 1e3;
        this.setState({ buffer });
      });
    });
  };

  render() {
    return (
      <Card
        sx={{
          width: 290,
          background: "#191c26",
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
        }}
      >
        <CardContent>
          <PieChart width={240} height={200} onMouseEnter={this.onPieEnter}>
            <Pie
              data={[
                { name: "Buffer used", value: this.state.buffer["used"] },
                { name: "Buffer total", value: this.state.buffer["total"] },
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
  }
}
