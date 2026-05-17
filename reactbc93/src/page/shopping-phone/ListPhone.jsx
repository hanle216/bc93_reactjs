import React from "react";
import Phone from "./Phone";

const ListPhone = (props) => {
  console.log(props);
  const renderListPhone = () => {
    const { listPhone, onDetail,onAddToCart } = props; //const onDetail = props.onDetail;
    return listPhone.map((phone) => {
      return <Phone key={phone.maSP} phone={phone} onDetail={onDetail} onAddToCart={onAddToCart}/>;
    });
  };
  return <div className="row">{renderListPhone()}</div>;
};

export default ListPhone;
