import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Divider, IconButton } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { makeStyles } from "@material-ui/styles";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ListItemText from "@mui/material/ListItemText";

const useStyles = makeStyles({
  paper: {
    "&&": {
      background: "#2a2a30",
      color: "white",
    },
  },
});

export default function AppDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding key="Dashboard">
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider sx = {{color: "white"}}/>
        <ListItem disablePadding key="server1">
          <ListItemButton>
            <ListItemIcon>
              <StorageOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={`Api Gateway`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding key="server2">
          <ListItemButton>
            <ListItemIcon>
              <StorageOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={`Api Gateway`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding key="server3">
          <ListItemButton>
            <ListItemIcon>
              <StorageOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={`Api Gateway`} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="container">
      <IconButton
        onClick={toggleDrawer("left", true)}
        className="body-button"
        color="primary"
      >
        <ArrowForwardIosOutlinedIcon style={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        variant="reponsive"
        color="primary"
        classes={{ paper: classes.paper }}
      >
        {list("")}
      </Drawer>
    </div>
  );
}
