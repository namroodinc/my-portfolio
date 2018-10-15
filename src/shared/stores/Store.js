import { action, autorun, extendObservable } from "mobx";

class Store {
  constructor() {
    this.reset();
  }

  @action reset() {
    extendObservable(this, {
      entries: [],
      loading: true,
      portfolioItems: []
    });
  }

  isLoading() {
    return this.loading;
  }

  retrieveEntries() {
    return this.entries;
  }

  retrievePortfolioItems() {
    return this.portfolioItems;
  }
}

let store = new Store();
export default store;

autorun(() => {
  // Uncomment below this to see how autorun in action: https://mobx.js.org/refguide/autorun.html
  const { value } = store;
  console.log(value);
});
