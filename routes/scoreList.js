var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var _cookie = req.cookies;
    request.get(config.score + '-' + _cookie.userid, function(error, response, body) {
        var _body = JSON.parse(body);
        // console.log(_body)
        res.render('scoreList', { data: _body });
    })
});

router.get('/answer/:id', function(req, res, next) {
    var _cookie = req.cookies;
    request.get(config.score + '-' + _cookie.userid, function(error, response, body) {
        var _body = JSON.parse(body);
        // console.log(_body)
        res.render('answerList', { data: _body });
    })
});

module.exports = router;