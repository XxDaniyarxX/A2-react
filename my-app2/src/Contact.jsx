import React, {useState} from 'react'

export function Contact() {
  const [title, setTitle] = useState('Saltanat')
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  function checkName() {
    setTitle(title === 'Saltanat' ? 'Asema' : 'Saltanat')
  }

  function handle(event) {
    console.log(event)
    setText(event.target.value)
  }
  function send() {
    // setText(text === true ? '' : '')
  }
  function Open() {
    setOpen(!open)
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>

      <button onClick={() => checkName()}>Click me</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count + 1)}>decrement</button>

      <input type="text" onChange={handle} value={text}/>
      <button onClick={() => setText('')}>Send</button>
      <div className='open' style={{width: '300px', height: '300px', backgroundColor: 'green', display: open ? 'block' : 'none' }}></div>
      <button onClick={() => (Open())} >{open ? 'close' : 'open'}</button>
    </div>
  )
}