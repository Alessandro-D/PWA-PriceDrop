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
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto"
  },
  cardMedia: {
    display: "flex",
    width: "40%",
    height: "100%"
  },
  content: {
    display: "flex",
    backgroundColor: "#F5F5F5"
  }
});

const classes = useStyles;

class Item extends Component {
  state = {
    count: 0,
    item: this.props.item,
    diffColor: this.getDiffColor()
  };

  // classes = useStyles;

  getDiffColor() {
    let diff = this.props.item.original_price - this.props.item.current_price;
    let color =
      diff == 0 ? "#e5e5e5" : diff > 0 ? "red" : diff < 0 ? "#00c925" : null;
    console.log(color);
    return color;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* CARD */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Card
            className={classes.card}
            style={{ display: "flex", height: 120 }}
          >
            {/* FOTO */}
            <CardMedia
              className={classes.cardMedia}
              image={this.state.item.image_url}
              title="Item"
              style={{ height: 120, width: "33.3%" }}
            />
            {/* CONTENT */}
            <CardContent
              className={classes.content}
              style={{ display: "flex", width: "66.6%", flexDirection: "column", padding:0, margin:0 }}
            >
              <Grid container>
                {/* NAME */}
                <Grid item xs={12} sm={12} style={{ height: 60 }}>
                  <Typography
                    gutterBottom
                    variant="button"
                    align="center"
                    style={{
                      fontSize: "14pt",
                      margin: 1,
                      backgroundColor: "#FFFFFF"
                      // height:'50%'
                    }}
                  >
                    {this.state.item.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} style={{ height: 60 }}>
                <Divider />
                  <Grid
                    container
                    justify="space-between"
                    style={{
                      flexGrow: 1,
                      backgroundColor: "#FFFFFF",
                      width: "100%"
                      // height:'100%'
                    }}
                  >
                    {/* OLD PRICE */}
                    <Grid item sm={6}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        style={{
                          margin: "auto",
                          fontWeight: "bold",
                          fontSize: "32pt"
                        }}
                        align="left"
                      >
                        ${this.state.item.original_price}
                      </Typography>
                    </Grid>
                    <Grid item sm={6} justify="flex-end">
                      {/* NEW PRICE */}
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: this.state.diffColor,
                          width: "100%",
                          height: 60,
                          display: "block"
                        }}
                        edge="end"
                        raised="true"
                        fullWidth={true}
                      >
                        <Typography
                          variant="h5"
                          color="textPrimary"
                          style={{
                            margin: "auto",
                            fontWeight: "bolder",
                            backgroundColor: this.state.diffColor,
                            width: "100%",
                          }}
                          align="center"
                        >
                          ${this.state.item.current_price}
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Item;
