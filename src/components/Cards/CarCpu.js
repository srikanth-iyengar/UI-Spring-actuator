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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#7AC142"];

export default class CardCpu extends PureComponent {
  state = {
    cpu: {},
  };

  refreshCpu = () => {
    const cpu = {};
    API.get("/metrics/system.cpu.usage").then((res) => {
      cpu["usage"] = res["data"]["measurements"][0]["value"] * 100;
      cpu["max"] = 100 - cpu["usage"];
      this.setState({ cpu });
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => this.refreshCpu(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
                { name: "Current usage", value: this.state.cpu["usage"] },
                { name: "Max usage", value: this.state.cpu["max"] },
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
  }
}
