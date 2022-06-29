import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { PureComponent } from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import API from "../API";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class CardRam extends PureComponent {
  state = {
    ram: {},
  };

  componentDidMount() {
    this.interval = setInterval(() => this.refreshRam(), 20000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  refreshRam = () => {
    const ram = { };
    API.get("/metrics/jvm.memory.used").then((res) => {
      ram["used"] = res["data"]["measurements"][0]["value"] / 1e9;
      API.get("/metrics/jvm.memory.max").then((res) => {
        ram["max"] = res["data"]["measurements"][0]["value"] / 1e9;
        this.setState({ ram });
      });
    });
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
                { name: "Used memory", value: this.state.ram["used"] },
                { name: "Max memory", value: this.state.ram["max"] },
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
              <Cell key = "ram.used" fill={COLORS[0]}/>
              <Cell key = "ram.max" fill={COLORS[3]}/>
              <Cell />
            </Pie>
            <Tooltip />
          </PieChart>
          <Typography variant="h6" style={{ marginLeft: 50, color: "white" }}>
            JVM Ram Usage
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
