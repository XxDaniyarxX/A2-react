import React from 'react'
import {products2,} from '../data/index.js'
import './Bizznes.css'

export function Bizznes() {

  function findDiscountPrice(price, discountedPrice) {
    return (price * (1 - discountedPrice / 100)).toFixed(2);
  }

  return (
    <div key={products2.id} style={{display: 'flex', gap: '30px', width: '2200px', margin: '0 auto', flexWrap: 'wrap', height: '400px'}}>
      {
        products2.map((products2) => (
          <div className={`${products2.discount ? 'green': 'red'}`} key={products2.id} style={{border: '1px solid black', textAlign: 'center', width: '700px', height: '1350px' }}>
            <h2 style={{position: 'absolute', marginLeft: '500px', color: 'gold', fontSize: '40px' }}>{`${products2.discount ? '-': ''} ${products2.discountedPrice ? `${products2.discountedPrice}%`: ``}`}</h2>
            <img  style={{objectFit: 'cover', width: '700px', height: '500px'}} src={products2.image} alt="hihi"/>
             <h1></h1>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
              <img width={225} src={products2.images[0]} alt=""/>
              <img width={225} src={products2.images[1]} alt=""/>
              <img width={225} src={products2.images[2]} alt=""/>
            </div>

            <h3 style={{fontSize: '45px', color: 'blue'}}>{products2.title}</h3>
            <h3 style={{fontSize: '40px', color: 'yellow'}}>{products2.description}</h3>
            <h2>{products2.discount}</h2>
            <h3 style={{fontSize: '35px', color: 'aqua'}}> {` Price: ${findDiscountPrice(products2.price, products2.discountedPrice)}`}</h3>
            <h3 style={{fontSize: '35px', color: 'fuchsia', textDecoration: 'line-through'}}> {` ${products2.discountedPrice ? `${'\u03A7'}    Price:` : ''} ${products2.discountedPrice ? `${products2.price}` : ''}`}</h3>
            <h3 style={{fontSize: '35px', color: 'brown'}}>{products2.viewCount}</h3>
            <h3 style={{fontSize: '35px', color: 'greenyellow'}}>{`Рейтинг: ${products2.rating} ${'\u2713'}`}</h3>

          </div>
        ))
      }
    </div>
  )
}

