import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PortfolioListItem extends React.Component {
  render() {
    const { assetUrl, id, title } = this.props;

    return (
      <div
        className="portfolio__list-item"
      >
        <Link
          to={`/work/${id}`}
        >
          <img
            src={`https:${assetUrl}`}
          />
        </Link>
        <Link
          to={`/work/${id}`}
        >
          {title}
        </Link>
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
