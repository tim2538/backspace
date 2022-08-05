import React from "react";
import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/system";

export interface ButtonProps {
  label: string;
}

function Button(props: ButtonProps) {
  return <MUIButton>{props.label}</MUIButton>;
}

export default styled(Button)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
});
