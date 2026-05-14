import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="container py-3">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <Card />
        </div>
        <div className="col-12 col-md-4">
          <Card />
        </div>
        <div className="col-12 col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Content;
