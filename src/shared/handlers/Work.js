import React from "react";
import PropTypes from "prop-types";
import marked from "marked";
import ReactHtmlParser from "react-html-parser";
import { observer } from "mobx-react";

import Actions from "../actions/Actions";
import Store from "../stores/Store";

import { Loading } from "../components/Index";

@observer
class Work extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  componentDidMount() {
    Store.reset();
    const { match } = this.props;
    Actions.getOnePortfolioItem(match.params.portfolioId);
  }

  componentWillUnmount() {
    Store.reset();
  }

  render() {
    if (Store.isLoading()) return <Loading />;

    const assets = Store.retrieveAssets();
    const { text, title } = Store.retrievePortfolioItem();

    return (
      <div
        className="container"
      >
        <h1>
          {title}
        </h1>

        <div>
          {ReactHtmlParser(marked(text))}
        </div>

        <div>
          {assets.map((asset, i) =>
            <img
              key={i}
              src={asset.url}
            />
          )}
        </div>
      </div>
    )
  }
}

Work.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  })
};

export default Work;
