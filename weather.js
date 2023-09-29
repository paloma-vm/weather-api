async function getWeather(zip, apiKey, units = 'imperial') {
    
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    try {
      // try something
      const res = await fetch(path)
      const json = await res.json()
      return json
    } catch(err) {
      // handle errors here
      return err
    }
    
    
}

async function getWeatherByZip(apiKey, zip, units, onSuccess, onError) {
    
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    await fetch(path)
      .then(res => res.json())
      .then(json => {
        onSuccess(json)
      })
      .catch(err => onError(err))
}

async function getWeatherByCity(apiKey, city, units, onSuccess, onError) {
    
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${apiKey}&units=${units}`
    await fetch(path)
      .then(res => res.json())
      .then(json => {
        onSuccess(json)
      })
      .catch(err => onError(err))
}
// an option maybe
async function getWeatherByZoneType(apiKey, zoneType, units, onSuccess, onError) {
    
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    await fetch(path)
      .then(res => res.json())
      .then(json => {
        onSuccess(json)
      })
      .catch(err => onError(err))
}

// module system
//export to make available somewhere else
export { 
  getWeather 
}