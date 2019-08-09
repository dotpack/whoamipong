const request = require('request');
const express = require('express');
const router = express.Router();

const { query, validationResult } = require('express-validator');

function proxy(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    setTimeout(() => {
        try {
            request.get(req.query.url).on('error', err => {
                next(err);
            }).pipe(res);
        } catch(err) {
            next(err);
        }
    }, req.query.timeout || 0);
}
  
router.get('/', [
    query('timeout').optional().isNumeric(),
    query('url').isURL(),
    proxy,
]);

module.exports = router;
