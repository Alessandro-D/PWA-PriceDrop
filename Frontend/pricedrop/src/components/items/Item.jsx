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
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  cardMedia: {
    display: 'flex',
    width: '40%',
    height: '100%',
  },
  content: {
    display: 'flex',
    backgroundColor: '#F5F5F5',
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
    let diff = this.props.item.original_price - this.props.item.current_price
    let color = (
      diff == 0 ? '#e5e5e5' :
      diff > 0 ? 'red' :
      diff < 0 ? 'green' :
      null
    );
    console.log(color);
    return color;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.card} style={{ display: 'flex', height: '17vh' }}>
            <CardMedia
              className={classes.cardMedia}
              image={this.state.item.image_url}
              title="Item"
              style={{ height: 200, width: '30%' }}
            />
            <CardContent className={classes.content} style={{ display: 'flex', width: '60%', flexDirection: 'column' }}>
              <Typography gutterBottom variant="button" align="center" style={{fontSize:'14pt', margin:1, backgroundColor: '#FFFFFF' }}>
                {this.state.item.name}
              </Typography>
              <Divider />
              <Grid container justify="space-between" style={{ flexGrow: 1, backgroundColor: '#FFFFFF' }}>
                <Typography variant="h4" color="textSecondary" style={{ margin: 'auto', fontWeight: 'bold', fontSize: '36pt' }} align="left">
                  ${this.state.item.original_price}
                </Typography>
                <Button
                  variant="contained"
                  style={{backgroundColor:this.state.diffColor}}
                  edge="end"
                  raised="true"
                  // fullWidth="True"
                >
                  <Typography variant="h3" color="textPrimary" style={{ margin: 'auto', fontWeight: 'bolder', backgroundColor:this.state.diffColor }} align="left">
                    ${this.state.item.current_price}
                  </Typography>
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Item;
