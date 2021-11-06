const product_img01 = require("../Images/img-01.png").default;
const product_img02 = require("../Images/img-02.png").default;
const product_img03 = require("../Images/img-03.png").default;
const product_img04 = require("../Images/img-04.png").default;
const product_img05 = require("../Images/img-05.png").default;
const product_img06 = require("../Images/img-06.png").default;
const product_img07 = require("../Images/img-07.png").default;
const product_img08 = require("../Images/img-08.png").default;
const product_img09 = require("../Images/img-09.png").default;
const product_img10 = require("../Images/img-10.png").default;
const product_img11 = require("../Images/img-11.png").default;
const product_img12 = require("../Images/img-12.png").default;
const product_img13 = require("../Images/img-13.png").default;
const product_img14 = require("../Images/img-14.png").default;
const product_img15 = require("../Images/img-15.png").default;
const product_img16 = require("../Images/img-16.png").default;
const product_img17 = require("../Images/img-17.png").default;
const product_img18 = require("../Images/img-18.png").default;
const product_img19 = require("../Images/img-19.png").default;
const product_img20 = require("../Images/img-20.png").default;
const product_img21 = require("../Images/img-21.png").default;
const product_img22 = require("../Images/img-22.png").default;
const product_img23 = require("../Images/img-23.png").default;
const product_img24 = require("../Images/img-24.png").default;
const product_img25 = require("../Images/img-25.png").default;

const products = [
  {
    img: product_img01,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img02,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img03,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img04,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img05,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img06,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img07,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img08,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img09,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img10,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img11,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img12,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img13,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img14,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img15,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img16,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img17,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img18,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img19,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img20,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img21,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img22,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img23,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img24,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
  {
    img: product_img25,
    name: "[what happen] How to create",
    price: 2500,
    like: 236,
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const productData = {
  getAllProducts,
  getProducts,
};

export default productData;
