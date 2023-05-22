import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Commonproduct(props) {

    const {product} = props;

  return (

    <div className="comproductdiv">
        <Link className="productanker" to={`/product/${product._id}`}>
          <img className="comimagepart" src={product.image} alt="" />

          <div className="comtextpart">
            <div className="Pricediv">
              <div className="p-side common-p-side">
                PKR <span>{product.disPrice}</span>.06
              </div>
              <div className="dis-side">PKR {product.price}</div>
            </div>
            <div className="n-side"> <span> {product.name} </span></div>
            <div className="tag-side">{product.Promotag}</div>
            <div className="Shipippingdiv Pricediv">
              <div className="shipping-side"> {product.isFreeshipping ? 'Free shipping' : ' ' } </div>
              <div className="addtocartbtn-side"> <button className="addtocartbtn">Add to cart</button> </div>
            </div>
            
            <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>

          </div>
        </Link>
      </div>

  )
}
