import React, { Component } from "react";
import Item from "./Item";
import { Grid } from "@material-ui/core";
import faker from "faker";
import SearchManager from "../search/SearchManager";

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
        image_url: faker.random.image(300,300),
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
            <SearchManager />
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
