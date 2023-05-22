import React from 'react'
import data from '../data'
import Flashproduct from './flashproduct'
// import Flashproduct from './flashproduct'


export default function Flashsalecont() {
  return (

<div className="productcontainer">
    <div className="productcontainerheading">
      <a href="/">
        <img src="./images/deal.webp" alt="" />
      </a>
      <div className="timer">Timer</div>
    </div>
    <div className="productsarea">
     
     { data.products.map((product) => (
         <Flashproduct key={product._id} product={product} ></Flashproduct>
     ))}
      
    </div>


  </div>




    
  )
}
