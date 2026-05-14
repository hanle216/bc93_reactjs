import React from "react";

const EventHandler = () => {
  const handleClick = () => {
    alert("Clicked!");
  };
  const clickAgain = (name) => {
    alert(`Hello ${name}`);
  };
  const handleInput = (event) => {
    // event : đối tượng sự kiện, nó chứa thông tin về sự kiện vừa xảy ra
    // tương tự như document.getElementById('input').value trong js thuần
    // .target là lấy ra các tag html hiện tại đang thao tác
    console.log("event", event);
    console.log(event.target.value);
  };
  const handleButton = (event) => {
    // nhận vào event khi click vào button
    // event: đối tượng sự kiện được thao tác. Ví dụ: event của đối tượng onClick, onChange, onInput
    // -> thì sẽ lấy ra các thao tác tương ứng
    // .target: sẽ lấy ra các thẻ nào
    // lấy ra text của button khi click vào
    console.log("event click button", event);
    alert("Bạn vừa bấm vào button " + event.target.innerText);
  };
  return (
    <div className="p-5">
      <button className="btn btn-info" onClick={handleClick}>
        Click me
      </button>
      {/* Gọi hàm có tham số, phải bọc ngoài bằng 1 arrow function */}
      <button
        className="btn btn-danger ms-3"
        onClick={() => {
          clickAgain("Su");
        }}
      >
        Click me
      </button>
      <br />
      {/* event: đối tượng sự kiện, nó chứa thông tin về sự kiện vừa xảy ra
      tương tự như document.getElementByID('input').value trong JS thuần
      .target là cách lấy ra các tag HTML hiện tại đang thao tác
       */}
      <label className="p-3">Hàm gọi thường</label>
      <input
        className="mt-3"
        type="text"
        onInput={(event) => {
          handleInput(event);
        }}
      />
      {/* gọi nhanh hàm handleInput */}
      <label className="p-3">Hàm gọi nhanh</label>
      <input type="text" onChange={handleInput} />

      {/*  event thứ 1 nó thuộc về event, sự kiện khi thao tác với tag HTML */}
      <br />
      <br />
      <br />
      <h2 className="py-3">Practice about Event</h2>
      {/* 4 buttons, click vao button se alert ra text cua button đó */}
      <button className="btn btn-danger" onClick={handleButton}>
        Red
      </button>
      <button className="btn btn-primary ms-3" onClick={handleButton}>
        Blue
      </button>
      <button className="btn btn-success ms-3" onClick={handleButton}>
        Green
      </button>
      <button className="btn btn-warning ms-3" onClick={handleButton}>
        Yellow
      </button>
    </div>
  );
};

export default EventHandler;
