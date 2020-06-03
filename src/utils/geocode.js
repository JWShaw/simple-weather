const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1Ijoiam9uYXRoYW4tc2hhdyIsImEiOiJja2F1ODd6N3IxNG5nMnRreWNjemVmcmJtIn0.srQTDjeWIBEYJ3dBnCI6Wg`

    request( {url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features[0]) {
            callback('Unable to find location.  Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode