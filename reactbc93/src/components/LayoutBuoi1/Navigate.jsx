import React from "react";

const Navigate = () => {
  return (
    <div
      className="bg-dark text-white p-4"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h3 className="mb-4 text-center">My Menu</h3>

      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <a
            className="nav-link active bg-primary text-white rounded"
            href="#"
          >
            🏠 Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            👤 Profile
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            📦 Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            📞 Contact
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-secondary disabled">
            🚫 Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;