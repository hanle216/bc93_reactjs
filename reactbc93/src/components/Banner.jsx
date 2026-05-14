import React from "react";

const Banner = () => {
  return (
    <div className="card mb-4" style={{border:'3px solid blue', backgroundColor:'#f8f9fa', padding:'15px'}}>
      <div className="card-body">
        <h1 className="card-title">A Warm Welcome!</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sit architecto at labore debitis veniam earum esse dicta doloribus quo qui asperiores molestiae, vero numquam harum ducimus quasi dignissimos dolore.
        </p>
        <a href="#" className="btn btn-primary">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Banner;
