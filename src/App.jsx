import "./App.css"
import { ContextProvider } from './store/context';
import { Aiapp } from './components/AiApp';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  return (<> 
      <ContextProvider>
        <Aiapp></Aiapp>
      </ContextProvider>
  </>
    )
}

export default App
