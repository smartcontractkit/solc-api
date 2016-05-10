var express = require('express');
var solc = require('solc');
var router = express.Router();

/* GET users listing. */
router.post('/compile', function(req, res, next) {
  var solidity = req.body.solidity;
  var compiled = solc.compile(solidity, 1);

  res.json(compiled)
});

module.exports = router;
