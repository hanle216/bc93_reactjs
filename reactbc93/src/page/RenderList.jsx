import { useState } from "react";

const RenderList = () => {
  const [list, setList] = useState(["item 1", "item 2", "item 3"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
  const renderListUser = () => {
    return  users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      });
    
  };
  return (
    <div>
      <h1>Render List</h1>
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <ul>{renderListUser()}</ul>
    </div>
  );
};

export default RenderList;
