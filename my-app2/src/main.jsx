import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Showme} from './Showme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*<Info />*/}
    <Showme />
  </StrictMode>,
)
