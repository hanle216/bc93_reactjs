import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CardItem from "../components/CardItem";

const ThucHanhLayoutB1 = () => {
  return (
    <div>
      <Header />
      <div className="container w-75 mx-auto mt-4">
        <Banner />
        {/* List cards */}
        <div className="row mb-4">
          <div className="col-3">
            <CardItem />
          </div>
          <div className="col-3">
            <CardItem />
          </div>
          <div className="col-3">
            <CardItem />
          </div>
          <div className="col-3">
            <CardItem />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThucHanhLayoutB1;
