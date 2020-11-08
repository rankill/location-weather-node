const axios = require('axios')
const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
const APP_ID = '3a5e0408602961c2a2b4861468a37b6a'

exports.getPlaceInfo = async(_address) => {
    try {
        const { data } = await axios.get(API_URL, {
            params: {
                appid: APP_ID,
                q: _address
            }
        })

        if (data.cod === 200) {
            const { name, coord } = data
            const { lat, lon } = coord

            return {
                name,
                lat,
                lon
            }
        } else {
            throw data.message
        }
    } catch (error) {
        throw 'Error getting place info'
    }
}

exports.getPlaceWeatherByCoord = async({ lat, lon }) => {
    try {
        const { data } = await axios.get(API_URL, {
            params: {
                appid: APP_ID,
                units: 'metric',
                lat,
                lon
            }
        })


        if (data.cod === 200) {
            return data.main.temp
        } else {
            throw data.message
        }
    } catch (error) {
        throw 'Error getting weatger ' + error
    }
}