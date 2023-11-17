import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";
import GraphComp from "./GraphComp";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "576px",
    padding: "6px 10px",
    border: "1px solid #FFFFFF",
    borderRadius: "10px",
    marginTop: "20px",
  },
  textFieldAdornment: {
    width: 40,
    height: 40,
  },
}));

const GreenRadio = withStyles({
  root: {
    color: "#6741d9",
    "&$checked": {
      color: "#6741d9",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function SignInPage() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2 className="text_color text_align fs32">Social, Hebbal on Dhun Jam</h2>
      <div>
        <GreenRadio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>

      <div>
        <h2>Bar Graph Example</h2>
        <GraphComp />
      </div>

      <Button className="btn">Save</Button>
    </div>
  );
}
