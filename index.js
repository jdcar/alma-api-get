//Jamie Carlstone
// July 6, 2021

const axios = require('axios').default;
const config = require('./config.js')
var productionKey = config.PRODUCTION_API_KEY;
var sandboxKey = config.SANDBOX_API_KEY;

//Replace MMS ID with the id from your system here
const mmsid = "MMS ID"

//Switch between production and sandbox keys by changing sandboxKey to productionKey
const url = `https://api-na.hosted.exlibrisgroup.com/almaws/v1/bibs/${mmsid}?apikey=${sandboxKey}&format=json`

axios.get(url)
.then(res => {

    console.log(res)

}).catch(error => {
    console.log(error)
})


