let axios = require("axios")

let getMemes = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let userNmae = req.query.username
        let password = req.query.password
        // console.log(`query params are: ${city} ${apiKey}`)
        var options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${userNmae}&password=${password}`
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

module.exports.getMemes = getMemes;