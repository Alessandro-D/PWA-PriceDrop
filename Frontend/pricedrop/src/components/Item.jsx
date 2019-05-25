import React, { Component } from 'react';

class Item extends Component {
    state = {
        item : {
            name: 'Item name',
            url: 'url',
            image_url: 'https://bulma.io/images/placeholders/1280x960.png',
            original_price: 'original price',
            current_price: 'current price',
            price_query: 'default',
            date_added: 'date'
        }
    }

    cardStyle = {
        width: 500,
        height: 240,
        backgroundColor: 'lightblue',
    }

    render() {
        return (
        <React.Fragment>
            <div style={this.cardStyle}>
                <h1>{ this.state.item.name }</h1>
                <img src={this.state.item.image_url} alt="" />
            </div>
        </React.Fragment>);
    }
}

export default Item;