var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var examid = req.params.id;
    request(config.test + '-' + examid, function(error, response, body) {
        if (error) {
            res.render('examList');
        } else {
            var _body = JSON.parse(body);
            // console.log(_body);
            res.render('examList', { data: _body });
        }
    })
});

router.post('/:id', function(req, res, next) {
    var examid = req.params.id;
    var _cookie = req.cookies;
    var _body = req.body;
    var result = {
        examid: req.params.id,
        answer: req.body,
        userid: _cookie.userid
    };
    // console.log(result)
    request.post({ url: config.anwser, form: result }, function(error, response, body) {
        var _body = JSON.parse(body);
        // console.log(_body);
        res.render('score', { data: _body });
    })
})


module.exports = router;