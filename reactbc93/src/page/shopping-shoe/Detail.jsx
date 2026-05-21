import React from "react";

const Detail = (props) => {
  const { onSelected } = props;
  return (
    <div>
      <div className="container">
        <h2 className="py-4">Shoes Information</h2>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={onSelected.image} alt="" />
          </div>
          <div className="col-6">
            <div className="table-responsive">
              <table className="table table-primary border-3">
                <tbody>
                  <tr>
                    <td scope="row">Name</td>
                    <td>{onSelected.name}</td>
                  </tr>
                  <tr>
                    <td scope="row">Description</td>
                    <td>{onSelected.description}</td>
                  </tr>
                  <tr>
                    <td scope="row">Price</td>
                    <td>{onSelected.price}</td>
                  </tr>
                  <tr>
                    <td scope="row">Quantity</td>
                    <td>{onSelected.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
