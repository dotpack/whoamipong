const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    connection: {
      remoteAddress: req.connection.remoteAddress,
      localAddress: req.connection.localAddress,
    },
    headers: req.headers,
  });
});

module.exports = router;
