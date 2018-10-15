import { action } from "mobx";
import request from "superagent";

import Store from "../stores/Store";

class Actions {
  @action getAllEntries() {
    Store.loading = true;

    request
      .get(`${process.env.BASE}/entries?access_token=${process.env.CONTENT_DELIVERY_API}`)
      .end(function (err, res) {
        Store.loading = false;

        if (err) {
          console.log(err);
        } else if (res) {
          Store.entries = res.body.results;
        }
      });
  }

  @action getAllPortfolioItems() {
    Store.loading = true;

    request
      .get(`${process.env.BASE}/entries?access_token=${process.env.CONTENT_DELIVERY_API}&content_type=portfolio`)
      .end(function (err, res) {
        Store.loading = false;

        if (err) {
          console.log(err);
        } else if (res) {
          Store.assets.push(...res.body.includes.Asset);
          Store.portfolioItems = res.body.items;
        }
      });
  }
}

export default new Actions();
