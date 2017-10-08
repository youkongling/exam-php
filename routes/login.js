var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/out', function(req, res, next) {
    // res.cookie('jobid', 0);
    // res.cookie('name', '');
    // res.cookie('number', '');
    // res.cookie('userid', '');
    res.redirect('/login');
});

router.post('/', function(req, res, next) {
    var formBody = req.body;
    console.log(formBody)
    request.post({ url: config.user, form: formBody }, function(error, response, body) {
        var _body = JSON.parse(body);
        if (_body == 0) {
            res.redirect('/login');
        } else {
            res.cookie('jobid', _body.jobid);
            res.cookie('userid', _body.userid);
            res.cookie('number', _body.userstaffid);
            res.cookie('name', _body.username);
            res.redirect('/index/' + _body.jobid);
        }
    });
});

module.exports = router;