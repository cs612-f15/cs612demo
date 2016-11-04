var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {

  res.setHeader("FOOBAR", "nothing")
  res.send({ type: "post", message: "this was a post" })
})

module.exports = router;
