var User = require('../models/user')
var utils = require('../utils')

exports.getUser = async function (req, res) {
    var random = Math.floor(Math.random() * 175)

    User.findOne().skip(random).exec(
        function (err, result) {
            console.log(result,'printing result from database')

            if (result.firstName == null || result.firstName == undefined || result.firstName == '') {
                return res.status(400).json({
                    success: false,
                    info: "Couldn't fetch info from database, please try later!"
                })
            }
            if (result.gender =='') {
                utils.getGender(result.firstName).then(genData => {
                    if (genData) {
                        console.log(genData)
                        //saving gender
                        result.gender = genData;
                        result.save().then(()=>{
                            console.log("savinag curent user gender details")
                            return res.json({
                                success: true,
                                info: {
                                    firstName: result.firstName,
                                    gender: result.gender
                                }
                            })
                        })
                       
                    }
                    else{
                        return res.status(400).json({
                            success: false,
                            info: {}
                        })
                    }
                   
                }).catch(err => {
                    console.log(err)
                    return res.status(400).json({
                        success: false,
                        info: err
                    })
                })
            }
            else{
                return res.json({
                    success: true,
                    info: {
                        firstName: result.firstName,
                        gender: result.gender
                    }
                })
            }
           

        })
}