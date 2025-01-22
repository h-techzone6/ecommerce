import React from "react";
import { useParams } from "react-router-dom";
// import products from "../products";

export default function Productdescscreen() {
  const products = []
  // const productID = match.params.id
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  return (
    <div>
      {/* <h1>Product Description</h1>
        <h1>The product ID is {product.id}</h1>
        <h1>{product.name}</h1> */}
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 m-2">
            <h1>{product.name}</h1>
            <img src={product.image} className="img-fluid m-3 bigimg" />
            <h1>{product.description}</h1>
          </div>
        </div>

        <div className="col-md-6">
          <div className="m-2">
            <h1>Price :{product.price}</h1>
            <hr />
            <h1>Select Quantity</h1>
            <select>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button className="btn btn-dark">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
