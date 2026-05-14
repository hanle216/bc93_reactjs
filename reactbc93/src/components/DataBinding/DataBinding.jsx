import React from "react";

const DataBinding = () => {
  // tạo 1 biến name
  const name = "Han Le";
  // function
  // anfn: tao arrow function
  const renderLongText = () => {
    return (
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
        architecto temporibus, recusandae dicta iste magnam voluptate adipisci
        commodi facilis eos sunt eaque aliquam, animi rem quibusdam qui.
        Tempora, iure neque!
      </span>
    );
  };
  const user = {
    name: "Han",
    password: "1234abcd",
    age: 27,
    school: "BKU",
    image: "https://i.pravatar.cc?img=68",
  };
  return (
    <div>
      {/* binding gia tri cua bien nam vao html */}
      <p>Binding bien: {name}</p>
      <p>Binding expression: {10 + 30}</p>
      {/* binding function */}
      {renderLongText()}
      <p>Username: {user.name}</p>
      <p>Password: {user.password}</p>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={user.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">
            {user.age} - {user.school}
          </p>
        </div>
      </div>

    </div>
  );
};

export default DataBinding;
