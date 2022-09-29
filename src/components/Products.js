import React from "react";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  const { data: product, status } = useSelector((state) => state.product);
  // const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products/");
    //   const data = await res.json();
    //   console.log(data);
    //   setProduct(data);
    // };
    // fetchProducts();
  });

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  // if (status === STATUSES.LOADING) {
  //   return <h2>Loading.....</h2>;
  // }

  return (
    <div className="productsWrapper">
      {product.map((val) => {
        return (
          <div className="card" key={val.id}>
            <img src={val.image} alt="pimg" />
            <h4>{val.title}</h4>
            <h5>{val.price}</h5>
            <button className="btn" onClick={() => handleAdd(val)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
