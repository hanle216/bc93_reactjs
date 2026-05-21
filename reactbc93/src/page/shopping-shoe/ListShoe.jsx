import React from "react";
import Shoe from "./Shoe";

const ListShoe = (props) => {
  // console.log("props list phone", props); // log ra để xem thấy props chưa
  const renderList = () => {
    // Destructuring
    const { listShoe, onDetail, onAddToCart } = props; //props.listShoe
    return listShoe.map((itemShoe) => {
      return (
        <Shoe
          key={itemShoe.id}
          shoe={itemShoe}
          onDetailShoe={onDetail}
          onCart={onAddToCart}
        />
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{renderList()}</div>
    </div>
  );
};

export default ListShoe;
