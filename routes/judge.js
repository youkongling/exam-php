var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('judge', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var _body = req.body;
    console.log(_body);
    res.render('score', { score: _body });
})

module.exports = router;