import React from "react";
import BestProductCard from "../components/BestProductCard";
import bestProduct from "../assets/data/best-product";
import Grid from "../components/Grid";
import productData from "../assets/data/product-data";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <div className="product">
      <div className="bestproduct">
        <div className="bestproduct__title">
          <h1>BEST PRODUCT</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can ve trimmed. Take the first
          </p>
        </div>
        <div className="bestproduct__image">
          <Grid col={3}>
            {bestProduct.map((item, index) => (
              <BestProductCard
                key={index}
                pos={item.pos}
                img={item.img}
                title={item.title}
              />
            ))}
          </Grid>
        </div>
      </div>
      <div className="product__list">
        <Grid col={5} gap={18}>
          {productData.getAllProducts().map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              like={item.like}
            />
          ))}
        </Grid>
      </div>
      <button className="product__button">SEE MORE</button>
    </div>
  );
};

export default Product;
