import React from 'react'

export default function Service(props) {

    let user = {
      city: 'Bishkek',
      age: 16,

    }
    let {city, age, image} = user

    let {img1} = props

  return (
    <div>
      My name is {props.name} I'm {props.age} years old
      <img style={{width: '200px', height: '200px'}} src={img1} alt=""/>
    </div>
  )
}

