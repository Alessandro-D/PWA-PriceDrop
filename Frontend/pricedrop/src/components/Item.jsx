import React, { Component } from "react";
// import ReactDom from 'react-dom';
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Box,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "white"
  },
  card: {
    width: 340
  },
  cardMedia: {
    height: 140
  },
  sideBox : {
    backgroundColor : '#F5F5F5'
  }
});

const classes = useStyles;

class Item extends Component {
  state = {
    count: 0,
    item: this.props.item
  };

  classes = useStyles;

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <Grid item sm={10}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                image={this.state.item.image_url}
                title="Item"
                style={{ height: 140 }}
                md={12}
              />
              <CardContent>
                <Grid container justify="space-between" alignItems="stretch">
                  <Grid item sm={8} >
                    <Typography gutterBottom variant="h5" align="left">
                      {this.state.item.name}
                    </Typography>
                  </Grid>
                  <Grid item sm={4}>
                    <Typography variant="button" align="right">
                      Original Price: {this.state.item.original_price}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container justify="space-between">
                  <Grid item />
                  <Grid item>
                    <Button
                      variat="contained"
                      color="primary"
                      // onClick={this.handleIncrement}
                      raised
                    >
                     New Price: {this.state.item.current_price}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Box sm={4} className={classes.sideBox}>
            <a>side link</a>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Item;

// TESTS2