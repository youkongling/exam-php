var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {



    res.render('examList', { title: 'Express' });
});

// router.post('/', function(req, res, next) {
//     var _body = req.body;
//     res.render('login', { title: 'Express' });
// });

module.exports = router;