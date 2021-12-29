const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d1392dadf8e2067a16e8c403654240d3&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Can\'t connect to the weather sevice!', undefined)
        } else if (response.body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(undefined, 'The temperature is ' + response.body.current.temperature + ' but feel like ' + response.body.current.feelslike + ' and have ' + response.body.current.humidity + '% humidity')
        }
    })
}

module.exports = forecast;
