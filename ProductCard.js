import React from "react";

function ProductCard({ title, price }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src="/path/to/product.jpg" alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
