var express = require('express')
var router = express.Router()
var UserController = require('../controllers/user')

var index = '../routes/indexLoggedin'
//const user = new UserController();

/* GET users. */
router.get('/user', function(req, res) {  
  res.send('user res');
});

module.exports = router;
