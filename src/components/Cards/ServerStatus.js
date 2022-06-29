import React from "react";
import { IconButton } from "@mui/material";
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
const ServerStatus = ({ status }) => {
  if (status == true) {
    return (
      <div>
        <IconButton className="glow-icon-sucess">
          <ArrowCircleUpOutlinedIcon
            style={{ color: "#4CAF50" }}
            fontSize="small"
          />
        </IconButton>
      </div>
    );
  } else {
    return (
      <div>
        <IconButton className="glow-icon-fail">
          <ArrowCircleDownOutlinedIcon
            style={{ color: "#ff653e" }}
            fontSize="small"
          />
        </IconButton>
      </div>
    );
  }
};

export default ServerStatus;
