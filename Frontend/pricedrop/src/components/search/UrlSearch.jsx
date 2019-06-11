import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "../../../node_modules/@material-ui/core";

import "./_search.css"

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
            <Grid container>
              <TextField
                id="standard-with-placeholder"
                label="Insert item URL here"
                placeholder="URL"
                style={searchStyle}
                margin="normal"
              />
            </Grid>
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

const buttonStyle = {
  // width: 10,
  display: "inline",
  marginTop: 10,
  marginBottom: 20,
  backgroundColor: "#227231",
  color: "#FFFFFF",
  height:50,
};
