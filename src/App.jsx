import './App.css'
import { useEffect, useState } from 'react'

const App = () => {

  const [weather, setWeather] = useState([]);

  async function getWeather() {
    const response = await fetch('https://goweather.herokuapp.com/weather/Nairobi') 
    const data = await response.json()
    console.log(data) 
  }

 


  return (
    <div>
      <button onClick={getWeather}>Get Weather</button>
    </div>
  )
}

export default App


