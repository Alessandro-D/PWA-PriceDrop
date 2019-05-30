import React, { Component } from "react";
import Item from "./Item";
import UrlSearch from "./UrlSearch";
import { Grid } from "@material-ui/core";
import faker from "faker";

class ItemList extends Component {
  state = {};

  items = [];

  constructor(props) {
    super(props);
    let t = 1;
    while (t < 30) {
      let fakeItem = {
        id: t,
        name: faker.commerce.productName(),
        url: "url",
        image_url: faker.image.business(300, 300),
        original_price: faker.random.number({ min: 90, max: 110 }),
        current_price: faker.random.number({ min: 90, max: 110 }),
        price_query: "default",
        date_added: "date"
      };
      this.items.push(fakeItem);
      t++;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={1} justify="space-around">
          <Grid item xs={12} sm={10} md={8}>
            <UrlSearch />
          </Grid>
          <Grid container spacing={3}>
            {this.items.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ItemList;

const fakeItem = {
  id: 1,
  name: faker.commerce.productName(),
  url: "url",
  image_url: faker.image.business(300, 300),
  original_price: faker.random.number({ min: 90, max: 110 }),
  current_price: faker.random.number({ min: 90, max: 110 }),
  price_query: "default",
  date_added: "date"
};
//   {
//     id: 2,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.imageUrl(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 3,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.technics(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 4,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 5,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 6,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 7,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 8,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 9,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   },
//   {
//     id: 10,
//     name: faker.commerce.productName(),
//     url: "url",
//     image_url: faker.image.image(300, 300),
//     original_price: faker.random.number({min:90,max:110}),
//     current_price: faker.random.number({min:90,max:110}),
//     price_query: "default",
//     date_added: "date"
//   }
// ];
