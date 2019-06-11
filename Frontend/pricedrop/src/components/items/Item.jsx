import React, { Component } from "react";
// import ReactDom from 'react-dom';
import Button from "@material-ui/core/Button";
import {
  Card,
  // CardActionArea,
  CardMedia,
  Grid,
  // Box,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";

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
      diff === 0 ? "#e5e5e5" : diff > 0 ? "red" : diff < 0 ? "#00c925" : null;
    // styles.newPriceText = diff;
    return color;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* CARD */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card style={{ display: "flex", height: 120 }}>
            {/* FOTO */}
            <CardMedia
              image={this.state.item.image_url}
              title="Item"
              style={styles.cardMedia}
            />
            {/* CONTENT */}
            <CardContent style={styles.cardContent}>
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
                    }}
                  >
                    {/* OLD PRICE */}
                    <Grid item sm={6}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        style={styles.oldPriceText}
                        align="left"
                      >
                        ${this.state.item.original_price}
                      </Typography>
                    </Grid>
                    <Grid item sm={6}>
                      {/* NEW PRICE */}
                      <Button
                        variant="contained"
                        style={styles.newPriceButton}
                        edge="end"
                        raised="true"
                        fullWidth={true}
                      >
                        <Typography
                          variant="h4"
                          color="textPrimary"
                          style={styles.newPriceText}
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

const styles = {
  cardMedia: {
    height: 120,
    width: "33.3%"
  },
  cardContent: {
    display: "flex",
    width: "66.6%",
    flexDirection: "column",
    padding: 0,
    margin: 0
  },
  newPriceText: {
    margin: "auto",
    fontWeight: "bolder",
    // backgroundColor: "black",
    width: "100%"
  },
  newPriceButton: {
    // backgroundColor: "white",
    width: "100%",
    height: 60,
    display: "block"
  },
  oldPriceText: {
    margin: "auto",
    fontWeight: "bold",
    fontSize: "32pt"
  }
};
