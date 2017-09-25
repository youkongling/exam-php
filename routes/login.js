var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var _body = req.body;
    res.redirect('/examList');
});

module.exports = router;