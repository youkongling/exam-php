var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');
// console.log(config);

/* GET home page. */
router.get('/', function(req, res, next) {
    request(config.list, function(error, response, body) {
        if (error) {
            // console.log(error)
            res.render('index');
        } else {
            var _body = JSON.parse(body)
            // console.log(_body.data)
            res.render('index', { data: _body.data });
        }
    })

    // res.render('index', { title: 'Express' });
});

module.exports = router;