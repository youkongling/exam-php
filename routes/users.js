var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var _cookie = req.cookies;
    res.render('users', { data: _cookie });
});

module.exports = router;