const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/9dc5617d4b89f77b3b03132d142cd55f/'+encodeURIComponent(latitude)+',' +encodeURIComponent(longitude)+'?units=si&lang=es';
    
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather server', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const temp = body.currently.temperature;
            const precipProbability = body.currently.precipProbability
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + precipProbability + '% chance of rain.');
        }
    });
}

module.exports = forecast;