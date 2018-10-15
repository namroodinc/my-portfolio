import React from "react";
import { observer } from "mobx-react";

import { Loading } from "../components/Index";

import Actions from "../actions/Actions";
import Store from "../stores/Store";

@observer
class Home extends React.Component {
  componentDidMount() {
    Actions.getAllPortfolioItems();
  }

  render() {
    if (Store.isLoading()) return <Loading />;

    console.log(Store.retrievePortfolioItems());

    return (
      <div
        className="container"
      >
        Home
      </div>
    )
  }
}

export default Home;
