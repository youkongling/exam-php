var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
    request(config.radio, function(error, response, body) {
        if (error) {
            console.log(error);
            res.render('radio');
        } else {
            var _body = JSON.parse(body);
            console.log(_body)
            res.render('radio', { data: _body });
        }
    })
});

router.post('/', function(req, res, next) {
    var _body = req.body;
    console.log(_body)
    res.render('score', { score: _body });
})

module.exports = router;