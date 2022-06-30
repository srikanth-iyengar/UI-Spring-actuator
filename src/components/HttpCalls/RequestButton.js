import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const GetButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  color: "#b990f4",
  "&:hover": {
    boxShadow: " 0 0px 10px #b990f4",
  },
});

const PostButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  color: "#4adb70",
  "&:hover": {
    boxShadow: " 0 0px 10px #4adb70",
  },
});

const PutButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  color: "#eead68",
  "&:hover": {
    boxShadow: " 0 0px 10px #eead68",
  },
});

const DeleteButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  color: "#db4d50",
  "&:hover": {
    boxShadow: " 0 0px 10px #db4d50",
  },
});

const OptionButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  color: "#85def1",
  "&:hover": {
    boxShadow: " 0 0px 10px #85def1",
  },
});

const PatchButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1,
  color: "#e2ea85",
  "&:hover": {
    boxShadow: " 0 0px 10px #e2ea85",
  },
});

const request_mapping = new Map()[(["GET", GetButton], ["POST", PostButton])];

const RequestButton = ({ method }) => {
  if (method == "GET") {
    return <GetButton variant="outlined">{method}</GetButton>;
  } else if (method == "POST") {
    return <PostButton variant="outlined">{method}</PostButton>;
  } else if (method == "PUT") {
    return <PutButton variant="outlined">{method}</PutButton>;
  } else if (method == "DELETE") {
    return <DeleteButton variant="outlined">{method}</DeleteButton>;
  } else if (method == "PATCH") {
    return <PatchButton variant="outlined">{method}</PatchButton>;
  } else {
    return <OptionButton variant="outlined">{method}</OptionButton>;
  }
};

export default RequestButton;
