var express = require('express');
var router = express.Router();

var fs = require("fs")
var path = require("path");

var globalpath = path.join(__dirname, "../", "public", "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files:files});
});

router.get('/:filename', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files});
});


router.post('/createfile', function(req, res, next) {
  var filename = req.body.filename;
  fs.writeFileSync(path.join(globalpath, filename), "");
  // res.send("file created")

  res.redirect(`${filename}`)
});

module.exports = router;
