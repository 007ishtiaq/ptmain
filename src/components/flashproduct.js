import React from 'react'
import { Link } from 'react-router-dom';

export default function Flashproduct(props) {

    const {product} = props;

  return (
    
      <div className="productdiv">
        <Link className="productanker" to={`/product/${product._id}`}>
          <img className="imagepart" src={product.image} alt="" />

          <div className="textpart">
            <div className="Pricediv">
              <div className="p-side">
                PKR <span>{product.disPrice}</span>.06
              </div>
              <div className="d-persontage"> {(product.disPrice-product.price)/product.price*100}%  </div>
            </div>
            <div className="dis-side">PKR {product.price}</div>
            <div className="n-side"> <span> {product.name} </span></div>
            <div className="tag-side">{product.Promotag}</div>
            <div className="Shipippingdiv Pricediv">
              <div className="shipping-side"> {product.isFreeshipping ? 'Free shipping' : ' ' } </div>
              <div className="addtocartbtn-side"> <button className="addtocartbtn">Add to cart</button> </div>
            </div>
            <div className="stock-count">
            {product.countInStock} items left
            <div className="meter" style={{background : `linear-gradient(to right,#b81a0a ${product.countInStock/product.initialStock*100}%,#c7c7cd ${product.countInStock/product.initialStock*100}%)`}} > </div>
            </div>
          </div>
        </Link>
      </div>
      
  )
}
