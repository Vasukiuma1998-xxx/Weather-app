import { useState } from "react"
import axios from "axios"
function Weather(){
    const [city,setcity]=useState("")
    const [weather,setweather]=useState("")
    const [temp,settemperature]=useState("")
    const [desc,setdesc]=useState("")
    

    function handlecity(evt){
        setcity(evt.target.value)
    }
    function getWeather(){
var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cd991a78653641b8f5be4c6e4a47663`)
weatherdata.then(function(success){
    console.log(success.data)
    setweather(success.data.weather[0].main)
   setdesc(success.data.weather[0].description)
   settemperature(success.data.main.temp)
})
.catch(function(error){
    alert("Please enter the valid city name")
})
    }
    return(
        <>
       <div className="text-center p-20 ">
    <h1 className="text-3xl font-bold mb-6">Weather App</h1>
    <input onChange={handlecity}type="text" className="w-64 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-6 outline-none" placeholder="Enter city..."></input>
    <button onClick={getWeather}className="bg-green-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300">Fetch</button>
  </div>
  <div className=" flex items-center justify-center mb-0">
  <div className="bg-white p-4 sm:p-10 shadow-lg rounded-lg  sm:w-72 bg-cover" >
      <h1 className="text-xl font-bold mb-2 sm:mb-4">Weather: {weather}</h1>
      <h1 className="text-lg mb-2 sm:mb-4">Temperature: {temp}</h1>
      <h1 className="text-lg mb-2 sm:mb-4">Description: {desc}</h1>
    </div>
  </div>
</>
    )
}
export default Weather