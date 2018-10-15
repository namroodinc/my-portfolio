import React from "react";
import PropTypes from "prop-types";

class Glitch extends React.Component {
  render() {
    const { src } = this.props;

    const glitchImg = (
      <div
        className="glitch__img"
        style={{
          background: `url(${src}) no-repeat 50% 0`
        }}
      />
    );

    return (
      <div
        className="glitch"
      >
        {glitchImg}
        {glitchImg}
        {glitchImg}
        {glitchImg}
        {glitchImg}
        {glitchImg}
        <img
          src={src}
        />
      </div>
    );
  }
}

Glitch.defaultProps = {
  src: ''
}

Glitch.propTypes = {
  src: PropTypes.string.isRequired
}

export default Glitch;
