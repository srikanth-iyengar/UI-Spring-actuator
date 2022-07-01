import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const StatusPie = ({ requests }) => {
  const [status, setStatus] = useState([]);

  const getStatus = () => {
    const temp = [];
    temp.push({ name: "Informational(100)", value: 0, fill: "#8884d8" });
    temp.push({ name: "Success(200)", value: 0, fill: "#83a6ed" });
    temp.push({ name: "Redirection", value: 0, fill: "#8dd1e1" });
    temp.push({ name: "Client (400)", value: 0, fill: "#82ca9d" });
    requests.map((req) => {
      if (req["status"] >= 100 && req["status"] < 200) {
        temp[0]["value"]++;
      } else if (req["status"] >= 200 && req["status"] < 300) {
        temp[1]["value"]++;
      } else if (req["status"] >= 300 && req["status"] < 400) {
        temp[2]["value"]++;
      } else {
        temp[3]["value"]++;
      }
    });
    setStatus(temp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getStatus();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="body-content--graph" style={{ marginTop: 50 }}>
      <Card
        style={{
          backgroundColor: "#191c26",
          marginLeft: 6.5,
          width: 600,
          minHeight: 300,
        }}
      >
        <CardContent>
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={status}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "black" }}
              background
              clockWise
              dataKey="value"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusPie;

// import React, { PureComponent } from "react";
// import {
//   RadialBarChart,
//   RadialBar,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "18-24",
//     uv: 31.47,
//     pv: 2400,
//     fill: "#8884d8",
//   },
//   {
//     name: "25-29",
//     uv: 26.69,
//     pv: 4567,
//     fill: "#83a6ed",
//   },
//   {
//     name: "30-34",
//     uv: 15.69,
//     pv: 1398,
//     fill: "#8dd1e1",
//   },
//   {
//     name: "35-39",
//     uv: 8.22,
//     pv: 9800,
//     fill: "#82ca9d",
//   },
//   {
//     name: "40-49",
//     uv: 8.63,
//     pv: 3908,
//     fill: "#a4de6c",
//   },
//   {
//     name: "50+",
//     uv: 2.63,
//     pv: 4800,
//     fill: "#d0ed57",
//   },
//   {
//     name: "unknow",
//     uv: 6.67,
//     pv: 4800,
//     fill: "#ffc658",
//   },
// ];

// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

// export default class StatusPie extends PureComponent {

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart
//           cx="50%"
//           cy="50%"
//           innerRadius="10%"
//           outerRadius="80%"
//           barSize={10}
//           data={data}
//         >
//           <RadialBar
//             minAngle={15}
//             label={{ position: "insideStart", fill: "#fff" }}
//             background
//             clockWise
//             dataKey="uv"
//           />
//           <Legend
//             iconSize={10}
//             layout="vertical"
//             verticalAlign="middle"
//             wrapperStyle={style}
//           />
//         </RadialBarChart>
//       </ResponsiveContainer>
//     );
//   }
// }
