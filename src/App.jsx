import { useState } from 'react' 
import Header from './components/Header'
import MainPage from './components/MainPage'

function App() {

  const [starWarsData, setStarWarsData] = useState(null)

  fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(prev => ({...prev, data}))) 
      preventDefault()

  return (
    <>    
    <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </>
  )
}

export default App
