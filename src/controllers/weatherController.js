let axios = require("axios")

let getWeatherData = async function (req, res) {
    try {
        let city = req.query.q
        let apiKey = req.query.appid
        console.log(`query params are: ${city} ${apiKey}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let sortCityTemp = async function (req, res) {
    try {
        let myCities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let myTemps = [];
        let result = 0;
        for (let i = 0; i < myCities.length; i++) {
            let city = myCities[i];
            let apiKey = req.query.appid
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            }
             result = await axios(options)
            // console.log(result.data)
            let myResult = result.data
            myTemps.push({temp :myResult.main.temp , city : myResult.name})
            myTemps.sort( function(a,b){
                if(a.temp<b.temp) return -1;
                if(a.temp>b.temp) return 1;
                return 0;
            });
        }
        console.log(myTemps)
        res.status(200).send({ msg: result.data })
         
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





                    

module.exports.getWeatherData = getWeatherData
module.exports.sortCityTemp = sortCityTemp