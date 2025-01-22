import React from "react";
// import products from "../products";
import Product from "../components/Product";
import axios from 'axios';
import { useEffect,useState } from "react";

export default function HomeScreen() {

  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products/getallproducts').then(res=>{
      console.log(res)
      setProducts(res.data)
    }).catch(err=>{
      console.log(err)
    })
  
  }, [])
  
  return (
    <div>
      <div className="row justify-content-center">

        {/* {products.map((product) => {
          return <Product product={product} />;
        })} */}
        {products.length && (products.map(product => {
          return <div key={product._id}>
            <Product product={product}/>
          </div>
        }))}
      </div>
    </div>
  );
}
