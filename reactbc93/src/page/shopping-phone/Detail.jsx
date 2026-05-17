import React from "react";

const Detail = (props) => {
  const { selectedPhone } = props;
  return (
    <div>
      <h1>Detail</h1>
      <div className="row">
        <div className="col-6">
          <img className="w-100" src={selectedPhone.hinhAnh} alt="" />
        </div>
        <div className="col-6">
          <div className="table-responsive">
            <table className="table table-primary">
              <tbody>
                <tr>
                  <td scope="row">Ten san pham</td>
                  <td>{selectedPhone.tenSP}</td>
                </tr>
                <tr>
                  <td scope="row">Man hinh</td>
                  <td>{selectedPhone.manHinh}</td>
                </tr>
                <tr>
                  <td scope="row">He dieu hanh</td>
                  <td>{selectedPhone.heDieuHanh}</td>
                </tr>
                <tr>
                  <td scope="row">Camera truoc</td>
                  <td>{selectedPhone.cameraTruoc}</td>
                </tr>
                <tr>
                  <td scope="row">Camera sau</td>
                  <td>{selectedPhone.cameraSau}</td>
                </tr>
                <tr>
                  <td scope="row">Ram</td>
                  <td>{selectedPhone.ram}</td>
                </tr>
                <tr>
                  <td scope="row">Rom</td>
                  <td>{selectedPhone.rom}</td>
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
