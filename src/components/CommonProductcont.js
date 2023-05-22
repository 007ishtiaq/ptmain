import React from 'react'
import Commonproduct from './Commonproduct'
import data from '../data'

export default function Commonproductcont() {
  return (
    
    <div className="comproductcontainer">
    <div className="comproductcontainerheading">
      <div className="timer">More To Love</div>
    </div>
    <div className="productsarea">
    { data.products.map((product) => (
         <Commonproduct key={product._id} product={product} ></Commonproduct>
     ))}
    </div>
  </div>

  )
}
