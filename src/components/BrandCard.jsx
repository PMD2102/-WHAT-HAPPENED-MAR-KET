import React from "react";
import PropTypes from "prop-types";

const BrandCard = (props) => {
  return (
    <div className="brandcard">
      <p className="brandcard__title">{props.title} BRAND</p>
      <img className="brandcard__image" src={props.img} />
    </div>
  );
};

BrandCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default BrandCard;
