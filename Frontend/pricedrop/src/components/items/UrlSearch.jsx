import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class UrlSearch extends Component {
  state = {};
  searchStyle = {
    // marginLeft: 0, // 8,
    // marginRight: 0, // 8
    // marginTop: 0,
    // marginBottom:0,
    margin: 5,
    width: "100%",
    backgroundColor: "#FFFFFF",
  };
  boxStyle = {
    backgroundColor: "#FFFFFF",
    padding:  0,
    width: "5 0%",
    margin: "10px 20%",
    innerHeight:50,
    boxShadow: 'inset 1px 1px 3px 1px'
  };
  insertStyle = {};
  render() {
    return (
      //   <Grid item xs={12} sm={10} md={8}>
      <Paper style={{marginBottom:'20px', padding:'5px',boxShadow:'0px 1px 3px 0px', backgroundColor:'#e5e5e5', width:'100%'}}>
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
      </Paper>
      //   </Grid>
    );
  }
}

export default UrlSearch;
