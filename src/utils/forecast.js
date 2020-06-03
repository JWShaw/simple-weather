const request = require('postman-request')

const forecast = (long, lat, callback) => {
    const url = `http://api.weatherstack.com/current` + 
                `?access_key=d92855c72bbbc27d9ec15b69078eaa6e` + 
                `&query=${lat},${long}&units=m`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error || isNaN(long) || isNaN(lat)) {
            callback('Unable to resolve coordinates to a location!', undefined)
        } else {
            const weather = body.current
            callback(undefined, {
                weatherString:  `${weather.weather_descriptions[0]}. ` + 
                                `It is currently ${weather.temperature} degrees out.  ` + 
                                `It feels like ${weather.feelslike} degrees.`,
                weatherPic:     weather.weather_icons[0]
            })
        }
    })
    
}

module.exports = forecast