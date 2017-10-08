var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');
// console.log(config);


router.get('/', function(req, res, next) {
    var _cookie = req.cookies;
    // console.log(_cookie);
    if (_cookie.jobid) {
        res.redirect('/index/' + _cookie.jobid);
    } else {
        res.redirect('/login');
    }
})

/* GET home page. */
router.get('/index/:id', function(req, res, next) {
    var _cookie = req.cookies;
    // console.log(_cookie);
    var id = req.params.id;
    request(config.list + '-' + id, function(error, response, body) {
        if (error) {
            res.render('index');
        } else {
            var _body = JSON.parse(body)
            res.render('index', { data: _body.data, cookie: _cookie.number });
        }
    })
});

module.exports = router;