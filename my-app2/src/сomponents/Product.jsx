import React from 'react'
import './Product.css'

export default function Product({title, image, price, present, discount}) {
  return (
   <>
     <div className={`product ${discount ? 'red' : 'green'}`}>
       <img src={image} alt=""/>
       <h1>{title}</h1>
       <h2>{price}</h2>
       <h3>{present}</h3>
     </div>
   </>
  )
}

