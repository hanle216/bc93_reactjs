import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      {/* Hiển thị header, sử dụng như 1 thẻ khuyết html */}
      <div className="container">
        <h1 className="text-danger">Hello React JS</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
