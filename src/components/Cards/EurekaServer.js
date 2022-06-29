import { CardContent, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { useState, useEffect } from "react";
import { List, ListItem, Divider, Grid } from "@mui/material";
import API from "../API";
import ServerStatus from "./ServerStatus";

const EurekaServer = () => {
  const [servers, setServer] = useState([
    { name: "auth-service", instance: 2, status: false },
    { name: "online-judge", instance: 0, status: false },
    { name: "user-service", instance: 0, status: false },
  ]);

  const doesExist = (a, s) => {
    var exist = false;
    a.map((i) => {
      exist |= i == s;
    });
    return exist;
  };
  const getServer = () => {
    API.get("/health")
      .then((res) => {
        const discoverySide =
          res["data"]["components"]["discoveryComposite"]["components"][
            "discoveryClient"
          ]["details"]["services"];
        const eurekaSide =
          res["data"]["components"]["discoveryComposite"]["components"][
            "eureka"
          ]["details"]["applications"];
        const all_servers = [];
        discoverySide.map((service) => {
          const server = {
            name: service,
            instance: eurekaSide[service.toUpperCase()],
          };
          server["status"] = true;
          all_servers.push(server);
        });
        servers.map((service) => {
          if (doesExist(discoverySide, service["name"]) == 0) {
            service["status"] = false;
            all_servers.push(service);
          }
        });
        setServer(all_servers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getServer();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <Card
      style={{
        width: 600,
        background: "#191c26",
        marginLeft: 3,
        marginRight: 3,
        marginTop: 23.75,
        marginBottom: 3,
        height: 600,
      }}
    >
      <CardContent>
        <Typography variant="h4" color={"white"}>
          Eureka Server Status
        </Typography>
        <List sx={{ width: "100%", width: matchMedia }}>
          {servers.map((service) => (
            <ListItem alignItems="flex-start">
              <Grid container spacing={2}>
                <Grid item>
                  <ServerStatus status={service["status"]} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ marginLeft: 40, color: "white" }}
                  >
                    {service["name"].toUpperCase()}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ marginLeft: 50, color: "white" }}
                  >
                    {service["instance"]}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ color: "white", marginLeft: 80 }}
                  >
                    {service["status"] ? `UP` : `DOWN`}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default EurekaServer;
