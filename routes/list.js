var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var examid = req.params.id;
    request(config.rank + '&userid=' + req.cookies.userid + '&examid=' + examid, function(error, response, body) {
        if (error) {
            res.render('list');
        } else {
            var _body = JSON.parse(body);
            console.log(_body);
            res.render('list', { data: _body.data });
        }
    })
});

module.exports = router;