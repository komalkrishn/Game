var GenderApi = require('gender-api.com-client');
var config = require("./config.json")
var genderApiClient = new GenderApi.Client(config.genderApiKey);

module.exports ={
    getGender : function(firstName){
            return new Promise((success,reject) =>{
                if (firstName == null || firstName== undefined || firstName ==''){
                    console.log('here')
                    return reject("Couldn't fetch data from database, please try later!")
                }
                try{
                    genderApiClient.getByFirstName(firstName, function (response) {
                        console.log("Gender", response.gender); //female
                        console.log("Accuracy",response.accuracy); //98
                        return success(response.gender)
                    })
                }
               catch(e){
                    console.log(e)
                }
            })
    }
}