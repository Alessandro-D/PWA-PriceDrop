import React, {Component} from 'react';
import Item from './Item';

class ItemList extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
                {items.map(item =>(<Item key={item.id} item={item}></Item>))}
            </React.Fragment>
         );
    }
}
 
export default ItemList;

const items = [
    {
        id:1,
        name: 'Item name',
        url: 'url',
        image_url: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
        original_price: 100,
        current_price: 90,
        price_query: 'default',
        date_added: 'date'
    },
    {
        id:2,
        name: 'Item name',
        url: 'url',
        image_url: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
        original_price: 100,
        current_price: 100,
        price_query: 'default',
        date_added: 'date'
    },
    {
        id:3,
        name: 'Item name',
        url: 'url',
        image_url: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
        original_price: 100,
        current_price: 110,
        price_query: 'default',
        date_added: 'date'
    },{
        id:4,
        name: 'Item name',
        url: 'url',
        image_url: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
        original_price: 100,
        current_price: 100,
        price_query: 'default',
        date_added: 'date'
    }
]