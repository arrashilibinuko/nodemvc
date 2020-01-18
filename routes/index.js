var express = require('express');
var router = express.Router();

var home = require('../contollers/home');
var user = require('../contollers/users');


router.get('/',home.index);
router.get('/user',user.getusers);
router.get('/user/delete',user.deleteusers)


module.exports = router;