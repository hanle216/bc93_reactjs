import React from "react";

const Child = (props) => {
  // các component của React đều có props, cần thì mới lấy ra xài
  console.log("props", props);
  const resetName = () => {
    // reset về name mặc định ban đầu là "Cybersoft"
    const name = "Cybersoft";
    console.log("name child:", name);
    // truyền name vào lại cái rổ của cha để cha render lại
    props.onResetName(name);
  };
  return (
    <div>
      <h1>Child Component</h1>
      <p>Hello {props.nameProp}</p>
      <button className="btn btn-danger ms-2" onClick={resetName}>
        Reset name
      </button>
    </div>
  );
};

export default Child;
