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
    // Cập nhật lai state name với giá trị mới nhận được từ con
    setName(newName);
  };

  return (
    <div>
      <h1>Communication</h1>
      <p>Hello {name}</p>
      {/* Tại sao khi cha click button Change name thì con cũng thay đổi luôn?
      - khi click thì state sẽ thay đổi, cập nhật lại thành chữ Le Le
      - component sẽ render lại lần thứ 2
      - mà con cũng gọi state từ cha, nên con cũng sẽ thay đổi theo

       */}
      <button
        className="btn btn-success ms-2"
        onClick={() => {
          setName("Le Le");
        }}
      >
        Change name
      </button>
      <hr />
      {/* onResetName như 1 cái rổ của cha, có chứa function để truyền qua con, với mong muốn 
      nhận được dữ liệu của con truyền vào cái rổ
       */}
      <Child nameProp={name} onResetName={resetName} />
    </div>
  );
};

export default Communication;
