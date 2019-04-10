const express = require('express');
const router = express.Router();

function pong(req, res, next) {
  res.send({
    connection: {
      remoteAddress: req.connection.remoteAddress,
      localAddress: req.connection.localAddress,
    },
    headers: req.headers,
  });
}

/* GET home page. */
router.get('/', pong);
router.post('/', pong);

module.exports = router;
