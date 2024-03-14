var express = require('express');
var router = express.Router();

var fs = require("fs")
var path = require("path");

var globalpath = path.join(__dirname, "../", "public", "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createfile', function(req, res, next) {
  var filename = req.body.filename;
  fs.writeFileSync(path.join(globalpath, filename), "");
  res.send("file created")
});

module.exports = router;
