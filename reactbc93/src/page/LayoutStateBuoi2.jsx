import { useState } from "react";

const LayoutStateBuoi2 = () => {
  const [color, setColor] = useState("./images/red-car.jpg");
  const changeCar = (path) => {
    setColor(path);
  };
  //   const changeColorRed = () => {
  //     setColor("./images/red-car.jpg");
  //   };
  //   const changeColorBlack = () => {
  //     setColor("./images/black-car.jpg");
  //   };
  //   const changeColorSilver = () => {
  //     setColor("./images/silver-car.jpg");
  //   };
  return (
    <div>
      <h1 className="text-center">Layout State Buoi 2</h1>
      <div className="row">
        <div className="col-8">
          <img className="w-100" src={color} />
        </div>
        <div className="col-4">
          <button
            className="btn btn-danger"
            onClick={() => {
              changeCar("./images/red-car.jpg");
            }}
          >
            Red car
          </button>
          <button
            className="btn btn-dark ms-3"
            onClick={() => {
              changeCar("./images/black-car.jpg");
            }}
          >
            Black car
          </button>
          <button
            className="btn btn-secondary ms-3"
            onClick={() => {
              changeCar("./images/silver-car.jpg");
            }}
          >
            Silver car
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutStateBuoi2;
