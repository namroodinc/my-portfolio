import React from "react";
import PropTypes from "prop-types";

import Glitch from "./Glitch";

class PortfolioListItem extends React.Component {
  render() {
    const { assetUrl, id, title } = this.props;

    return (
      <div
        className="portfolio__list-item"
      >
        <div
          className="portfolio__list-item__content"
        >
          <a
            href={`/work/${id}`}
          >
            <Glitch
              src={`https:${assetUrl}`}
            />
          </a>
          <a
            href={`/work/${id}`}
          >
            {title}
          </a>
        </div>
      </div>
    );
  }
}

PortfolioListItem.defaultProps = {
  assetUrl: '',
  id: '',
  title: ''
}

PortfolioListItem.propTypes = {
  assetUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PortfolioListItem;
