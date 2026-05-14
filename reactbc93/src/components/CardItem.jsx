import React from 'react'

const CardItem = () => {
  return (
 <div className="card h-100" style={{border:'3px solid purple'}}>
  <img src="https://picsum.photos/200/300" className="card-img-top w-100" alt="..." style={{ height: "200px", objectFit: "cover" }}/>
  <div className="card-body">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>

  )
}

export default CardItem