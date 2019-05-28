import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class UrlSearch extends Component {
  state = {};
  searchStyle = {
    marginLeft: 8,
    marginRight: 8,
    width: "60%",
    backgroundColor: "#FFFFFF"
  };
  boxStyle = {
    backgroundColor: "#FFFFFF",
    padding: 30,
    // width: "90%",
    margin: "30px auto"
  };
  insertStyle = {};
  render() {
    return (
    //   <Grid item xs={12} sm={10} md={8}>
        <Paper style={this.boxStyle}>
          <Grid container justify="space-around">
            {/* <Typography style={this.insertStyle} color="textSecondary" variant="h4">
            Insert new item
        </Typography> */}
            <TextField
              id="standard-with-placeholder"
              label="Insert item URL here"
              placeholder="URL"
              style={this.searchStyle}
              margin="normal"
            />
          </Grid>
        </Paper>
    //   </Grid>
    );
  }
}

export default UrlSearch;
