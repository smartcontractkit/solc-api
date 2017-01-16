var express = require('express');
var solc = require('solc');
var router = express.Router();

/* GET users listing. */
router.post('/compile', function(req, res, next) {
  var compiled = solc.compile({sources: req.body}, 1);

  res.json(compiled)
});

module.exports = router;
