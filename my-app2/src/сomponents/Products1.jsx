import React from 'react'
import './Product.css'

export default function Products1({title, image, price, present, discount}) {
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * (discount / 100));
  }

  return (
    <>
      <div className={`product ${discount ? 'red' : 'green'}`}>
        <h4>{`${present ? `-${present}%`: ``}`}</h4>
        <img src={image} alt=""/>
        <h2>{title}</h2>
        {present ? (
          <>
            <h3 style={{textDecoration: 'line-through'}}>{`Цена: ${price}сом`}</h3>
            <h3>{`Цена со скидкой: ${calculateDiscountedPrice(price, present).toFixed(1)}сом`}</h3>
          </>
        ) : (
          <h3>{`Цена: ${price}сом`}</h3>
        )}
      </div>
    </>
  )
}
