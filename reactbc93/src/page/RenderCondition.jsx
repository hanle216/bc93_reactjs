import React from "react";

const RenderCondition = () => {
  let isLogin = false;
  const screenLogin = () => {
    return (
      <div>
        <h2>Vui long dang nhap</h2>
        <button className="btn btn-success">Login</button>
      </div>
    );
  };
  const screenUser = () => {
    return (
      <div>
        <h2>Xin chao User</h2>
        <button className="btn btn-danger">Logout</button>
      </div>
    );
  };
  return (
    <div>
      <h1>Render Condition</h1>
      {/* bên trong if else có 1 dòng -> nên sử dụng toán tử 3 ngôi */}
      {isLogin ? screenUser() : screenLogin()}
    </div>
  );
};

export default RenderCondition;
