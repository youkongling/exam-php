var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../config/config');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var examid = req.params.id;
    // console.log(examid);
    request(config.test + '-' +examid, function(error, response, body) {
        if (error) {
            res.render('anwser');
        } else {
            var _body = JSON.parse(body);
            // console.log(_body);
            res.render('anwser', { data: _body });
        }
    })
});

router.post('/:id', function(req, res, next) {
    var examid = req.params.id;
    var formBody = req.body;
    var result = {
    	examid : req.params.id,
    	ids : req.body
    }
    request.post({url : config.test + '-' +examid ,form: result}, function(error, response, body){
        // console.log(body)
        var _body = JSON.parse(body);
        // console.log(_body)
        res.render('anwser', { data: _body });
    })
});

module.exports = router;