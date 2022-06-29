import React, { PureComponent } from "react";
import CardDisk from "./Cards/CardDisk";
import CardRam from "./Cards/CardRam";
import makeStyles from "@material-ui/styles/makeStyles";
import CardCpu from "./Cards/CarCpu";
import CardJvm from "./Cards/CardJvm";
import EurekaServer from "./Cards/EurekaServer";
const useStyles = makeStyles({
  card: {
    width: 290,
    background: "#191c26",
    marginLeft: 9,
    marginRight: 9,
  },
});

export default function AppContent() {
  const classes = useStyles();
  return (
    <div className="body-content--row">
      <div className="body-content--col">
        <CardRam />
        <CardDisk />
      </div>
      <div className="body-content--col">
        <CardCpu />
        <CardJvm />
      </div>
      <div className="body-content--col" style={{marginLeft: 30}}>
        <EurekaServer />
      </div>
    </div>
  );
}
