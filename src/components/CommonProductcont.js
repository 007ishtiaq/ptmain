import React from 'react'
import Commonproduct from './Commonproduct'
import data from '../data'

export default function Commonproductcont() {
  return (
    
    <div class="comproductcontainer">
    <div class="comproductcontainerheading">
      <div class="timer">More To Love</div>
    </div>
    <div class="productsarea">
    { data.products.map((product) => (
         <Commonproduct key={product._id} product={product} ></Commonproduct>
     ))}
    </div>
  </div>

  )
}
