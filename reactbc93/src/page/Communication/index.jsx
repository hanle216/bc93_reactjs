import { use, useState } from "react";
import Child from "./Child";
/* 
- Props: truyền data từ component cha sang component con
- Lifting state up: truyền data từ component con sang component cha
 */
const Communication = () => {
  const [name, setName] = useState("Cybersoft");
  // Tạo 1 function để nhận dữ liệu từ component con
  const resetName = (newName) => {
    console.log("new name:", newName);
    // Cập nhật lai state name với giá trị mới nhận được từ component con
    setName(newName);
  };

  return (
    <div>
      <h1>Communication</h1>
      <p>Hello {name}</p>
      <button
        className="btn btn-success ms-2"
        onClick={() => {
          setName("Le Le");
        }}
      >
        Change name
      </button>
      <hr />
      <Child nameProp={name} onResetName={resetName} />
    </div>
  );
};

export default Communication;
