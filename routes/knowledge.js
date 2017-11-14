var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
    request.get(config.knows, function(error, response, body) {
        var _body = JSON.parse(body);
        res.render('knowledge', { data: _body ? _body.data : null, type: 'knowsList' });
    })
});

router.get('/:id', function(req, res, next) {
    var typeid = req.params.id;
    request.get(config.knows + '&typeid=' + typeid, function(error, response, body) {
        var _body = JSON.parse(body);
        res.render('knowledge', { data: _body ? _body.data : null, type: 'knowsDetail' });
    })
});

router.get('/article/:id', function(req, res, next) {
    var articleid = req.params.id;
    request.get(config.knows + '&articleid=' + articleid, function(error, response, body) {
        var _body = JSON.parse(body);
        res.render('knowledge', { data: _body, type: 'knowsArticle' });
    })
});

router.post('/search', function(req, res, next) {
    var form = req.body;
    request.post({ url: config.search, form: { keyword: form.info } }, function(error, response, body) {
        var _body = JSON.parse(body);
        if (_body == null) {
            res.render('knowledge', { data: null, type: 'cantFind' });
        } else {
            console.log(_body);
            res.render('knowledge', { data: _body.data, type: 'knowsDetail' });
        }
    });
});

module.exports = router;