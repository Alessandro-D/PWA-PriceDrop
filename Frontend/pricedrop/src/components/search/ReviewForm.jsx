import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./_search.css";
import { Button } from "../../../node_modules/@material-ui/core";

class ReviewForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Paper className="containerStyle">
          <Paper className="boxStyle">
            <Grid container>
              {/* justify="space-around" */}
              <TextField
                id="standard-with-placeholder"
                label="Insert item URL here"
                placeholder="URL"
                className="searchStyle"
                margin="normal"
                // variant="filled"
              />
              <Button className="buttonStyle">Test</Button>
            </Grid>
          </Paper>
        </Paper>
      </React.Fragment>
    );
  }
}

export default ReviewForm;
