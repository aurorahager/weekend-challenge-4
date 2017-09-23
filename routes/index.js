//requires
var router = require('express').Router();
var path = require('path');

router.get('/', function (req, res) {
    var indexPath = path.resolve('./public/views/index.html');
    console.log(indexPath);
    res.sendFile(indexPath);
});

module.exports = router;