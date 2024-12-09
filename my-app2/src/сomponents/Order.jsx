import React from 'react'

export default function Order({data}) {
  function findDiscountPrice(price, discount) {
    return price * (1 - discount / 100)
  }

  return (
    <div>
      <img style={{objectFit: 'cover'}} width={170} src={data.image} alt=""/>
      <h3 style={{color: 'red'}}>{data.brand}</h3>
      <h3 style={{color: 'blue'}}>{data.title}</h3>
      <h3 style={{color: 'yellow'}}>{data.price}$</h3>
      <h3 style={{color: 'greenyellow'}}>{data.category}</h3>
      <h3 style={{color: 'gold'}}>{findDiscountPrice(data.price, data.discount)}</h3>
    </div>
  )
}
