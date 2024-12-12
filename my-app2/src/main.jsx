import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Todo} from './сomponents/Todo/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}

    {/*<Info />*/}
    {/*<Showme />*/}
   {/*<Contact />*/}
    <Todo />
  </StrictMode>,
)
