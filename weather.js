// Functions


async function getWeatherByZip(zip, apiKey, units = 'imperial') {
    
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  return getWeather(path)
}

async function getWeatherByCity(city, apiKey, units) {
  
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${apiKey}&units=${units}`
  await fetch(path)
    .then(res => res.json())
    .then(json => {
      onSuccess(json)
    })
    .catch(err => onError(err))
}

async function getWeatherByGeo(apiKey, zoneType, units, onSuccess, onError) {
  
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  await fetch(path)
    .then(res => res.json())
    .then(json => {
      onSuccess(json)
    })
    .catch(err => onError(err))
}

// BASE FUNCTION

async function getWeather(path) {
    
  try {
    // try something
    const res = await fetch(path)
    const json = await res.json()
    console.log(json) // find relevant and make more intuitive
    const weatherData = {
      temp: json.main.temp,
      description: json.weather[0].description
    }
    // return json
    return weatherData
  } catch(err) {
    // handle errors here
    return err
  }  
}



// module system
//export to make available somewhere else
export { 
  getWeatherByZip,
  getWeatherByCity,
  getWeatherByGeo
}