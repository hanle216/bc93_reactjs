import React from "react";

const Phone = (props) => {
  const { phone, onDetail, onAddToCart } = props;

  return (
    <div className="col-4">
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
        </div>
        <button className="btn btn-success" onClick={() => onDetail(phone)}>
          View detail
        </button>
        <button className="btn btn-danger" onClick={() => onAddToCart(phone)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Phone;
