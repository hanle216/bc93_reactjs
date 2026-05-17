import React from "react";

const Cart = (props) => {
  const { carts, onDeleteCart, updateCart } = props;
  const calculateTotal = () =>{
    let total = 0;
    // forEach giống map() nhưng không trả về mảng mới
    carts.forEach(item => {
        total += item.soLuong
    });
    return total;
  }
  const renderHTMLCart = () => {
    return carts.map((item) => {
      return (
        <tr key={item.maSP}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} alt={item.tenSP} width={50} />
          </td>
          <td>
            <button onClick={() => updateCart(item.maSP, false)}>-</button>
            {item.soLuong}
            <button onClick={() => updateCart(item.maSP, true)}>+</button>
          </td>
          <td>{item.giaBan}</td>
          <td>{item.soLuong * item.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteCart(item.maSP)}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Cart ({calculateTotal()})
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-primary">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Ten</th>
                      <th scope="col">Hinh anh</th>
                      <th scope="col">So luong</th>
                      <th scope="col">Gia tien</th>
                      <th scope="col">Total</th>
                      <th scope="col">Setting</th>
                    </tr>
                  </thead>
                  <tbody>{renderHTMLCart()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
