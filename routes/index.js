const express = require('express');
const textBodyParser = require('body-parser').text({ type: () => true });
const router = express.Router();

function pong(req, res, next) {
  res.send({
    connection: {
      remoteAddress: req.connection.remoteAddress,
      localAddress: req.connection.localAddress,
    },
    headers: req.headers,
    parsedBody: typeof req.body === 'string' ? req.body : '',
    parsedSize: typeof req.body === 'string' ? req.body.length : 0,
  });
}

/* GET home page. */
router.use(textBodyParser);
router.get('/', pong);
router.post('/', pong);

module.exports = router;
