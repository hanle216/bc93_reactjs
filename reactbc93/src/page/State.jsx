import { useState } from "react";
/* 
State: re-render lại component nếu state thay đổi giá trị
 */
const State = () => {
  console.log("state render");
  // let isLogin = false;

  // isLogin có giá trị mặc định ban đầu là false
  // setIsLogin là hàm để thay đổi giá trị của isLogin
  // useState trả về 1 mảng gồm 2 giá trị: giá trị ban đầu và 1 function (dùng để cập nhật gía trị)
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
   setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  const screenLogin = () => {
    return (
      <div>
        <h2>Vui long dang nhap</h2>
        <button className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  };
  const screenUser = () => {
    return (
      <div>
        <h2>Xin chao User</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>State</h1>
      {isLogin ? screenUser() : screenLogin()};
    </div>
  );
};

export default State;
