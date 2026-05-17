import { useState } from "react";
import data from "./dataGlassess.json";
/* 
click image
   ↓
onClick
   ↓
setSelectedGlass(item)
   ↓
state đổi
   ↓
component render lại
   ↓
src={selectedGlass.url} đổi
   ↓
ảnh kính đổi
 */
const ThucHanhLayoutB2 = () => {
  // state đang lưu kính đang chọn
  const [selectedGlass, setSelectedGlass] = useState(data[0]);

  return (
    <div>
      <div>
        <h2 className="text-center text-black py-4 text-uppercase">
          Try glasses app online
        </h2>
      </div>

      <div
        style={{
          backgroundImage: "url('./glassesImage/background.jpg')",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px",
        }}
      >
        {/* model */}
        <div className="d-flex justify-content-center mb-5">
          <div style={{ position: "relative", width: "250px" }}>
            <img src="./glassesImage/model.jpg" alt="" className="w-100" />
            {/* kính */}
            <img
              src={selectedGlass.url}
              alt=""
              style={{
                position: "absolute",
                top: "78px",
                left: "50px",
                width: "150px",
                opacity: 0.7,
              }}
            />
          </div>
        </div>
      </div>
      {/* glass information */}
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-primary table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedGlass.name}</td>
                <td>{selectedGlass.price}</td>
                <td>{selectedGlass.desc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* list glasses */}
      <div className="container bg-light p-4 rounded">
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-2 mb-3" key={item.id}>
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-50 bordered p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedGlass(item);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThucHanhLayoutB2;
