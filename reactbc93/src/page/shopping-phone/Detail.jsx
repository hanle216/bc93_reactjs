import React from "react";

const Detail = () => {
  return (
    <div>
      <h1>Detail</h1>
      <div className="row">
        <div className="col-6">
          <img className="w-100" src="./images/vsphone.jpg" alt="" />
        </div>
        <div className="col-6">
          <div className="table-responsive">
            <table className="table table-primary">
              <tbody>
                <tr>
                  <td scope="row">Man hinh</td>
                  <td>Item</td>
                </tr>
                <tr>
                  <td scope="row">He dieu hanh</td>
                  <td>Item</td>
                </tr>
                <tr>
                  <td scope="row">Camera truoc</td>
                  <td>Item</td>
                </tr>
                <tr>
                  <td scope="row">Camera sau</td>
                  <td>Item</td>
                </tr>
                <tr>
                  <td scope="row">Ram</td>
                  <td>Item</td>
                </tr>
                <tr>
                  <td scope="row">Rom</td>
                  <td>Item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
