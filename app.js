const { getPlaceInfo, getPlaceWeatherByCoord } = require('./place/place')

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'City address to get the weather',
        demand: true
    }
}).argv

const getInfo = async(_address) => {
    try {
        const placeInfo = await getPlaceInfo(_address);

        console.log(placeInfo)
        const placeWeather = await getPlaceWeatherByCoord(placeInfo)

        console.log(`${placeInfo.name} weather is ${placeWeather} celsius`)

    } catch (error) {
        console.log(`${_address} weather cannot be loaded, please try again`)
    }
}

getInfo(argv.address)