var express = require('express');
var router = express.Router();

var home = require('../contollers/home');

var users = require("../contollers/users")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/',home.index);
router.get('/user',users.userlist)

module.exports = router;
