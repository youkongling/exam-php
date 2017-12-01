var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
    request.get(config.scoreView, function(error, response, body) {
        var _body = JSON.parse(body);
        console.log(_body)
        res.render('scoreView', { data: _body.data });
    });
});

module.exports = router;