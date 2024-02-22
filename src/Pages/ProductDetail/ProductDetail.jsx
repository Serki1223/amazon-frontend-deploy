import React, { useEffect, useState } from "react";
import "../ProductDetail/ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";



function ProductDetail() {
  const {productId} =useParams()
  const [isLoading, setisLoading] = useState(false)
  const [product, setproduct] = useState({})
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data) 
       setisLoading(false)
    }).catch((err)=>{
      console.log(err)
       setisLoading(false)
    })
  }, [])
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
