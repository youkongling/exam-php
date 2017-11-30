var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');
// console.log(config);


router.get('/', function(req, res, next) {
    var _cookie = req.cookies;
    // console.log(_cookie);
    if (_cookie.jobid) {
        // res.redirect('/index/' + _cookie.jobid);
        res.redirect('/users');
    } else {
        res.redirect('/login');
    }
});

router.get('/confirm/:id', function(req, res, next) {
    var openid = req.params.id;
    // console.log(userid);
    request(config.openid + openid, function(error, response, body) {
        if (error) {
            res.render('/');
        } else {
            var _body = JSON.parse(body);
            var cookie = {
                jobid: _body.jobid,
                name: _body.name,
                userid: _body.id,
                number: _body.number,
                status: _body.status,
                openid: openid
            };
            if (cookie.status == 200) {
                res.cookie('jobid', cookie.jobid);
                res.cookie('userid', cookie.userid);
                res.cookie('number', cookie.number);
                res.cookie('name', cookie.name);
                res.cookie('opneid', cookie.openid);
                res.redirect('/');
            } else {
                res.cookie('openid', openid);
                res.redirect('/login');
            }
        }
    });

});

/* GET home page. */
router.get('/index/:id', function(req, res, next) {
    var _cookie = req.cookies;
    // console.log(_cookie);
    var id = req.params.id;
    request(config.list + '&userid=' + id + '&jobid=' + _cookie.jobid, function(error, response, body) {
        if (error) {
            res.render('index');
        } else {
            var _body = JSON.parse(body);
            console.log(_body)
            res.render('index', { data: _body.data, cookie: _cookie.number });
        }
    })
});

module.exports = router;