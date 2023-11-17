import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "@material-ui/core";
import "./styles.css";

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

export default function SignInPage() {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2 className="text_color text_align fs32" >Venue Admin Login</h2>
      <div>
        <TextField
          placeholder="Username"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            
            style: { color: "#FFFFFF", fontSize: "16px" },
          }}
          className={classes.textField}
        />
      </div>

      <div>
        <TextField
          placeholder="Password"
          variant="standard"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment
                position="end"
                className={classes.textFieldAdornment}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <Visibility style={{ color: "#FFFFFF" }} />
                  ) : (
                    <VisibilityOff style={{ color: "#FFFFFF" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            style: { color: "#FFFFFF", fontSize: "16px" },
          }}
          className={classes.textField}
        />
      </div>

      <Button className="btn">Sign in</Button>
    </div>
  );
}
