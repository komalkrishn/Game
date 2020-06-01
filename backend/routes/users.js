var express = require('express');
var router = express.Router();
var userController = require("../controllers/user.controllers")

// get user 
router.get('/fetchName', userController.getUser)


module.exports = router;
