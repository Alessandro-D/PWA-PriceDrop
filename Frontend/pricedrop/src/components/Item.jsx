import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button : {
        backgroundColor : 'white',
    },        
    card : {
        maxWidth: 340,
    },
    cardMedia : {
        height:140,
    }
})

const classes = useStyles;

class Item extends Component {
    state = {
        count : 0,
        item : this.props.item, 
    }

    classes = useStyles;
    
    handleIncrement = () => {
        this.setState({count : this.state.count+1})
    }


    render() {
        return (
        <React.Fragment>
            <Card className={classes.card} style={{width:360}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.cardMedia}
                        image={this.state.item.image_url}
                        title="Item"
                        style={{height:140}}
                    />
                </CardActionArea>
                <Button variant="contained" color="secondary" onClick={this.handleIncrement} raised >Count: {this.state.count}</Button>
            </Card>
        </React.Fragment>);
    }
}

export default Item;