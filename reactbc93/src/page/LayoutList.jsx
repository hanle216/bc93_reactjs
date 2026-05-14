import React, { useState } from "react";

const LayoutList = () => {
  // thay đổi đường dẫn của thẻ img
  const [imgPath, setImgPath] = useState("./images/red-car.jpg");
  // render ra 3 button tương ứng với 3 loại xe, khi click vào button nào thì sẽ hiện thị xe đó ở thẻ img
  const [lstCar, setLstCar] = useState([
    {
      id: 1,
      name: "Red car",
      img: "./images/red-car.jpg",
      color: "btn btn-danger",
    },
    {
      id: 2,
      name: "Black car",
      img: "./images/black-car.jpg",
      color: "btn btn-dark",
    },
    {
      id: 3,
      name: "Silver car",
      img: "./images/silver-car.jpg",
      color: "btn btn-secondary",
    },
     {
      id: 4,
      name: "Steel car",
      img: "./images/steel-car.jpg",
      color: "btn btn-primary",
    },
  ]);
  const renderLstButton = () => {
    return lstCar.map((car) => {
      return (
        <button key={car.id} className={car.color} onClick={()=>{setImgPath(car.img)}}>
          {car.name}
        </button>
      );
    });
  };
  const changeCar = (imgPath) => {
    setLstCar(imgPath)
  };
  return (
    <div>
      <h1>Layout List</h1>
      <div className="row">
        <div className="col-8">
          <img src={imgPath} className="w-100" alt="" />
        </div>
        <div className="col-4">{renderLstButton()}</div>
      </div>
    </div>
  );
};

export default LayoutList;
