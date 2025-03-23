import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Aiapp } from './components/AiApp';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [count, setCount] = useState(0)


  return (<> 
        <Aiapp></Aiapp>
        
  </>
    )
}

export default App
