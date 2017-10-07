var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var examid = req.params.id;
    request(config.test + '-' +examid, function(error, response, body) {
        if (error) {
            // console.log(error);
            res.render('examList');
        } else {
            var _body = JSON.parse(body);
            // console.log(_body)
            res.render('examList', { data: _body });
        }
    })
});


module.exports = router;