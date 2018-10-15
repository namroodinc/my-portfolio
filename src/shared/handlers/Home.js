import React from "react";
import { observer } from "mobx-react";

import { Loading, PortfolioListItem } from "../components/Index";

import Actions from "../actions/Actions";
import Store from "../stores/Store";

@observer
class Home extends React.Component {
  componentDidMount() {
    Actions.getAllPortfolioItems();
  }

  render() {
    if (Store.isLoading()) return <Loading />;

    const portfolioList = Store.portfolioList;

    return (
      <div
        className="container"
      >

        <div
          className="portfolio"
        >

          {portfolioList.map((item, i) =>
            <PortfolioListItem
              {...item}
              key={i}
            />
          )}

        </div>

      </div>
    )
  }
}

export default Home;
