import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "../../../node_modules/@material-ui/core";

class UrlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
          <Grid container justify="space-around">
        <Paper style={containerStyle}>
            {/* <Paper style={boxStyle}> */}
            <Grid container>
              {/* justify="space-around" */}
              <TextField
                id="standard-with-placeholder"
                label="Insert item URL here"
                placeholder="URL"
                style={searchStyle}
                margin="normal"
                // variant="filled"
              />
            </Grid>
            {/* </Paper> */}
        </Paper>
        <Button
          style={buttonStyle}
          variant="contained"
          onClick={this.props.onSubmit}
          >
          New Item
        </Button>
          </Grid>
      </React.Fragment>
    );
  }
}

export default UrlSearch;

const containerStyle = {
  marginBottom: "20px",
  // padding: "5px",
  boxShadow: "0px 1px 3px 0px",
  backgroundColor: "#FFFFFF", //"#e5e5e5",
  width: "80%"
};

const searchStyle = {
  margin: 5,
  // width: "100%",
  backgroundColor: "#FFFFFF",
  width: "100%",
  margin: "10px"
};

const boxStyle = {
  backgroundColor: "#FFFFFF",
  padding: 0,
  width: "60%",
  margin: "10px",
  innerHeight: 50
  // boxShadow: "inset 1px 1px 3px 1px"
};

const buttonStyle = {
  // width: 10,
  display: "inline",
  marginTop: 10,
  marginBottom: 20,
  backgroundColor: "#227231",
  color: "#FFFFFF",
  height:50,
};
