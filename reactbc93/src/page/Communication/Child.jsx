import React from "react";

const Child = (props) => {
    console.log("props",props);
    const resetName=()=>{
        // reset về name mặc định ban đầu 
        const name = "Cybersoft"
        console.log("name child:", name);
        props.onResetName(name)
    }
  return (
    <div>
      <h1>Child Component</h1>
      <p>Hello {props.nameProp}</p>
      <button className="btn btn-danger ms-2" onClick={resetName}>Reset name</button>
    </div>
  );
};

export default Child;
