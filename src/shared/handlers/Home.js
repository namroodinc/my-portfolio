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

        <h1>
          Hi, I’m Ashoor.
        </h1>

        <div>
          <h3>
            I'm a Senior Developer based in London with over 12 years’ commercial experience.
          </h3>
          <h3>
            I’m passionate about what I do, and having had the opportunity to work with some big
            international clients and projects, I’ve gained an in-depth knowledge of several languages
            and by extension their associated Frameworks, Libraries and APIs.
          </h3>
          <h3>
            <a href="https://twitter.com/namroodinc" target="_blank">Twitter</a> /&nbsp;
            <a href="https://www.linkedin.com/in/namroodinc/" target="_blank">LinkedIn</a> /&nbsp;
            <a href="https://github.com/namroodinc" target="_blank">GitHub</a>
          </h3>
        </div>

        <hr />

        <h1>
          My past work
        </h1>

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
