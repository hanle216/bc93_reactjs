import React from "react";
import Phone from "./Phone";
import Detail from "./Detail";


const ShoppingPhone = () => {
  return (
    <div>
      <h1>Shopping Phone</h1>
      <div className="row">
        <Phone/>
        <Phone/>
        <Phone/>
        <Detail/>

      </div>
    </div>
  );
};

export default ShoppingPhone;
