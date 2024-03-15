var express = require('express');
var router = express.Router();

var fs = require("fs")
var path = require("path");

var globalpath = path.join(__dirname, "../", "public", "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files:files, filedata: ''});
});

router.get('/:filename', function(req, res, next) {

  const filedata = fs.readFileSync(path.join(globalpath, req.params.filename), "utf-8");
  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files, filedata : filedata});
});


router.post('/createfile', function(req, res, next) {
  var filename = req.body.filename;
  fs.writeFileSync(path.join(globalpath, filename), "");
  // res.send("file created")

  res.redirect(`${filename}`)
});

module.exports = router;
