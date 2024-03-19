var express = require('express');
var router = express.Router();

var fs = require("fs")
var path = require("path");

var globalpath = path.join(__dirname, "../", "public", "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files:files, filedata: "", filename:''});
});

router.get('/:filename', function(req, res, next) {

  const filedata = fs.readFileSync(path.join(globalpath, req.params.filename), "utf-8");
  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files, filedata : filedata, filename:req.params.filename});
});


router.post('/createfile', function(req, res, next) {
  var filename = req.body.filename;
  fs.writeFileSync(path.join(globalpath, filename), "");
  // res.send("file created")

  res.redirect(`/${filename}`)
});


router.get('/delete/:filename', function(req, res, next) {

  fs.unlinkSync(path.join(globalpath, req.params.filename));
  res.redirect("/")
  
});

router.post('/update/:filename', function(req, res, next) {

  fs.writeFileSync(path.join(globalpath, req.params.filename),req.body.filedata)
  res.redirect(`/${req.params.filename}`);
});

module.exports = router;
