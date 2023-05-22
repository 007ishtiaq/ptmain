import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Commonproduct(props) {

    const {product} = props;

  return (

    <div class="comproductdiv">
        <Link class="productanker" to={`/product/${product._id}`}>
          <img class="comimagepart" src={product.image} alt="" />

          <div class="comtextpart">
            <div class="Pricediv">
              <div class="p-side common-p-side">
                PKR <span>{product.disPrice}</span>.06
              </div>
              <div class="dis-side">PKR {product.price}</div>
            </div>
            <div class="n-side"> <span> {product.name} </span></div>
            <div class="tag-side">{product.Promotag}</div>
            <div class="Shipippingdiv Pricediv">
              <div class="shipping-side"> {product.isFreeshipping ? 'Free shipping' : ' ' } </div>
              <div class="addtocartbtn-side"> <button class="addtocartbtn">Add to cart</button> </div>
            </div>
            
            <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>

          </div>
        </Link>
      </div>

  )
}
