import React from "react";
import PropTypes from "prop-types";
import likeIcon from "../assets/Images/hearticon.png";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={props.img} />
      <p className="product-card__name">{props.name}</p>
      <div className="product-card__price-like">
        <p className="product-card__price-like__price">{props.price} won</p>
        <div className="product-card__price-like__like">
          <img
            className="product-card__price-like__like__likeicon"
            src={likeIcon}
          />
          <p className="product-card__price-like__like__numberlike">
            {props.like}
          </p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
};

export default ProductCard;
