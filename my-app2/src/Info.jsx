import React from 'react'
import {products, user} from './data/index.js'
import Order from './сomponents/Order.jsx'

export default function Info() {
  let array = ['Azim', 'Saltanat', 'Islam', 'Asema']
  {user}
  return (
    <div>
      {
        // array.map((item, index) => (
        //   <div key={index}>{item}</div>
        // ))
      }
      <div>
      {
        // user.map((item, index) => (
        //   <div key={index}>
        //     <h3>{item.name}</h3>
        //     <h3>{item.age}</h3>
        //     <h3>{item.id}</h3>
        //   </div>
        // ))
      }
      </div>
      {/*{text}*/}
      {/*{str}*/}

      <div style={{display: 'flex', gap: '50px', width: '800px', margin: '0 auto'}}>

        {
          products.map((item, index) => (
          <div>
           <Order key={item.id} data={item}  />
          </div>
        ))
        }
      </div>

    </div>

  )
}
