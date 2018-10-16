import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Glitch from "./Glitch";

class PortfolioListItem extends React.Component {
  render() {
    const { assetUrl, id } = this.props;

    return (
      <div
        className="portfolio__list-item"
      >
        <div
          className="portfolio__list-item__content"
        >
          <div
            className="portfolio__list-item__content__media"
          >
            <Link
              to={`/work/${id}`}
            >
              <Glitch
                src={`https:${assetUrl}`}
              />
            </Link>
          </div>
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
