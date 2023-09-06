function getWeather(apiKey, zip, units, onSuccess, onError) {
    // Replace this with your own API key!
    
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    fetch(path)
      .then(res => res.json())
      .then(json => {
        onSuccess(json)
      })
      .catch(err => onError(err))
}

export default getWeather