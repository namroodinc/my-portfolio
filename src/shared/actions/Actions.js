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

  @action getOnePortfolioItem(portfolioId) {
    Store.loading = true;

    return new Promise((resolve, reject) => {
      request
        .get(`${process.env.BASE}/entries/${portfolioId}?access_token=${process.env.CONTENT_DELIVERY_API}`)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
    }).then((item) => {
      const { fields } = item;
      const { mainMedia } = fields;

      const mediaPromise = mainMedia
        .map(image => {
          return new Promise((resolve, reject) => {
            request
              .get(`${process.env.BASE}/assets/${image.sys.id}?access_token=${process.env.CONTENT_DELIVERY_API}`)
              .end(function (err, res) {
                if (err) {
                  reject(err);
                } else {
                  resolve(res.body.fields.file);
                }
              });
          })
        });

      return Promise.all(mediaPromise)
        .then(media => {
          Store.assets.push(...media);
          Store.portfolioItem = item.fields;
          Store.loading = false;
        });
    });
  }
}

export default new Actions();
