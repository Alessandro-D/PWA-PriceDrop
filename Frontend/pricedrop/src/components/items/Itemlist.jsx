import React, { Component } from 'react';
import Item from './Item';
import { Grid } from '@material-ui/core';
import faker from 'faker';

class ItemList extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    {items.map(item => (<Item key={item.id} item={item}></Item>))}
                </Grid>
            </React.Fragment>
        );
    }
}

export default ItemList;

const items = [
    {
        id: 1,
        name: faker.commerce.productName(),
        url: 'url',
        image_url: faker.image.business(300,300),
        original_price: 100,
        current_price: 90,
        price_query: 'default',
        date_added: 'date'
    },
    {
        id: 2,
        name: faker.commerce.productName(),
        url: 'url',
        image_url: faker.image.imageUrl(300,300),
        original_price: 100,
        current_price: 100,
        price_query: 'default',
        date_added: 'date'
    },
    {
        id: 3,
        name: faker.commerce.productName(),
        url: 'url',
        image_url: faker.image.technics(300,300),
        original_price: 100,
        current_price: 110,
        price_query: 'default',
        date_added: 'date'
    }, {
        id: 4,
        name: faker.commerce.productName(),
        url: 'url',
        image_url: faker.image.image(300,300),
        original_price: 100,
        current_price: 100,
        price_query: 'default',
        date_added: 'date'
    }
]
