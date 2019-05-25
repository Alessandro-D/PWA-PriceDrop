import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { Card, CardActionArea, CardMedia, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        backgroundColor: 'white',
    },
    card: {
        width: 340,
    },
    cardMedia: {
        height: 140,
    }
})

const classes = useStyles;

class Item extends Component {
    state = {
        count: 0,
        item: this.props.item,
    }

    classes = useStyles;

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }


    render() {
        return (
            <React.Fragment>
                <Grid item md={8}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardMedia}
                                image={this.state.item.image_url}
                                title="Item"
                                style={{ height: 140 }}
                                md={12}
                            />
                        </CardActionArea>
                        <Button variant="contained" color="secondary" onClick={this.handleIncrement} raised>Count: {this.state.count}</Button>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Box md={4}><a>side link</a></Box>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Item;