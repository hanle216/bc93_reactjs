import React from "react";

const Cart = (props) => {
  const { onCarts, onRemove, onUpdate } = props;
  const renderCartItem = () => {
    return onCarts.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} width={50} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <button className="btn" onClick={() => onUpdate(item.id, false)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button className="btn" onClick={() => onUpdate(item.id, true)}>
                +
              </button>
            </div>
          </td>
          <td>{item.price * item.quantity}</td>
          <td>
            <button
              className="btn btn-danger p-1"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };
  const calculateQuantity = () => {
    let total = 0;
    onCarts.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Cart ({calculateQuantity()})
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
                  Shopping cart
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
                  <table className="table table-success">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Setting</th>
                      </tr>
                    </thead>
                    <tbody>{renderCartItem()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
