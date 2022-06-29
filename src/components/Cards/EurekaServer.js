import { CardContent, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
const EurekaServer = () => {
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
        <Typography variant="h2" color={"white"}>
          Eureka Server Status
        </Typography>
        <List sx={{ width: "100%", width: matchMedia }}>
          <ListItem alignItems="flex-start">
            <IconButton className="glow-icon-sucess">
              <ArrowCircleUpOutlinedIcon style={{ color: "#4CAF50" }} fontSize="large"/>
            </IconButton>
            <Typography variant="h4" style={{ marginLeft: 20, color: "white"}}>
              Auth-Service
            </Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </CardContent>
    </Card>
  );
};

export default EurekaServer;
