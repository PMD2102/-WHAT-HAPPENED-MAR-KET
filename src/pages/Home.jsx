import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import BrandStory from "./BrandStory";
import Footer from "./Footer";
import Happendissue from "./Happendissue";
import Introduction from "./Introduction";
import Product from "./Product";
import Whathappened from "./Whathappened";

const Home = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className="container">
              <div>
                <Introduction />
              </div>
              <div>
                <Product />
              </div>
              <div>
                <BrandStory />
              </div>
              <div>
                <Happendissue />
              </div>
              <div>
                <Whathappened />
              </div>
            </div>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Home;
