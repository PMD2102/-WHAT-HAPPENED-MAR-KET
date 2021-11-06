import React from "react";
import PropTypes from "prop-types";
import goIcon from "../assets/Images/go-icon.png";

const BestProductCard = (props) => {
  return (
    <div className="bestproductcard">
      <span className="bestproductcard__position">
        <img src={props.pos} />
      </span>
      <img className="bestproductcard__image" src={props.img} />
      <div className="bestproductcard__title">
        <p className="title">{props.title}</p>
        <img src={goIcon} />
      </div>
    </div>
  );
};

BestProductCard.propTypes = {
  pos: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BestProductCard;
